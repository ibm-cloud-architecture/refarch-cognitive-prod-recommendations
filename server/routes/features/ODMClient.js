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


module.exports=  {
  /**
  The wcsresponse is the Conversation response. ODM will use its variables, plus extra data to take a decision.
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
      	next(addODMOutputToWCSReponse(wcsresponse, chunk));
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	// uploads the ODM input data in the POST call
  req.write(computeODMInputData(config,wcsresponse));
  req.end();
 } // recommend function
} // exports

// ------------------------------------------------------------
// Private
// ------------------------------------------------------------


// Computes the data that we need to upload to ODM for taking the Decision
// The choice here is to include two things:
// - the context part of the Watson Conversation response. This is where data that has been gathered
//   by the bot during the conversation is stored, and the Decision Services may rely on some of these
//   Note: we don't send the full response object to reduce the size, only the context is interesting.
// - additional data that is gathered from outside of the bot conversation. In this demo
//   we send a dummy (hardcoded) customer. In real life, this would be obtained from a CRM system
//   based on the information we know when the customer engages with the bot upon login.
var computeODMInputData = function(config,wcsresponse) {

	// predefined data, would live in a CRM
	var young   = '"Customer":{"age":18,"subscription":"ADSL"}';
	var noFiber = '"Customer":{"age":18,"subscription":"ADSL"}';
	var retiree = '"Customer":{"age":65,"subscription":"ADSL"}';
	var adult   = '"Customer":{"age":26,"subscription":"ADSL"}';


	var wcsContext = JSON.stringify(wcsresponse.context);
	// build the data with 1/ the WCS context 2/ minus the ending curly bracket
	// 3/ plus a comma 4/ plus the external data 5/ plus the final curly bracket
	var data = "".concat(
		wcsContext.substring(0, wcsContext.length -1),
		",",
		young, // or pick another of the predefined data above
		"}"
		);

	if (config.debug) {
		console.log('Sending data: ' + data);
	}
	return data;
} // computeODMInputData

var addODMOutputToWCSReponse = function(wcsresponse, odmOutput) {
	var contextJSON = JSON.stringify(wcsresponse.context);
	var augmentedContextJSON = "".concat(
		contextJSON.substring(0, contextJSON.length -1),
		",",
		odmOutput.substring(1,odmOutput.length - 1),
		"}");
	wcsresponse.context=JSON.parse(augmentedContextJSON);

	return wcsresponse;
} // addODMOutputToWCSReponse
