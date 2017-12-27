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
Author: IBM - Jerome Boyer
*/
var http = require('https');


module.exports=  {
  /**
  The wcsresponse is the conversation response that may be enriched with other data before going to ODM
  */
  recommend : function(config,wcsresponse,res){
    // perform the POST
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
    console.log("Options: " + JSON.stringify(options));

	var req = http.request(options, function(res) {
		if (config.debug) {
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
		}
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			if (config.debug) {
    			console.log('chunk: ' + chunk);
    		}
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});
	var data = JSON.stringify(wcsresponse.context.recommend_data); 
	if (config.debug) {
		console.log('Sending data: ' + data);
	}
    
    req.write(data);
    req.end();
  }
}
