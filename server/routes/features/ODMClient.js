/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
This module delegate the recommendation to a decision service deployed on ODM platform.
Author: IBM - Jerome Boyer / Guilhem Molines
*/
var http = require('https');
var crmClient = require('./crmClient');

module.exports=  {
  /**
  The wcsresponse is the Conversation response. ODM will use its variables set in the context, plus extra data to take a decision.
  ODM output will be added to the Conversation context as well.
  */
  recommend : function(config,wcsresponse,response,next){
    // Config for the POST to the ODM Rule Execution Server
    var options = {
      protocol: "https:",
      hostname: config.odm.hostname,
      port: config.odm.port,
      path: config.odm.path,
      method: 'POST',
      headers: {
         "accept": "application/json",
         "content-type": "application/json",
          authorization: config.odm.authtoken
      }
    }
	if (config.debug) {
		console.log("Options: " + JSON.stringify(options));
	}

	var req = http.request(options, function(res) {
		if (config.debug) {
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
		}
		res.setEncoding('utf8');
		// the 'data' event is sent when the server responds with a data chunk.
		// This is where we grab this data - which is the Decision output -
		// and add it back to the Watson Conversation context
		res.on('data', function (chunk) {
  			if (config.debug) {
      			console.log('Received from ODM: ' + chunk);
      	}
      	next(addODMOutputToWCSReponse(wcsresponse, JSON.parse(chunk)));
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	// uploads the ODM input data in the POST call
  prepareODMInputData(config,wcsresponse, function(data){
    req.write(data);
    req.end();
  });

 } // recommend function
} // exports

// ------------------------------------------------------------
// Private
// ------------------------------------------------------------


// Computes the data that we need to upload to ODM for taking the Decision
// The choice here is to include two things:
// - the context part of the Watson Conversation response. This is where data that has been gathered
//   by the bot during the conversation are stored, and the Decision Services may rely on some of these
// data to take decision
var prepareODMInputData = function(config,wcsresponse,next) {
  crmClient.getUserProfile(config,wcsresponse.context.user, function(data) {
      wcsresponse.context["Customer"]=data;
      var contextJSON = JSON.stringify(wcsresponse.context);
      // for ODM just send the context
      if (config.debug) {
        console.log('Sending data: ' +contextJSON);
      }
      next(contextJSON);
   }
  )
} // prepareODMInputData

var addODMOutputToWCSReponse = function(wcsresponse, odmOutput) {
  wcsresponse.context["__DecisionID__"]=odmOutput["__DecisionID__"];
  wcsresponse.context["Recommendation"]=odmOutput["Recommendation"];
	return wcsresponse;
} // addODMOutputToWCSReponse
