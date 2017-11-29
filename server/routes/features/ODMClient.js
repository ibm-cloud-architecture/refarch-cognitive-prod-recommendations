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
var http = require('http');

module.exports=  {
  /**
  The wcsresponse is the conversation response that may be enriched with other data before going to ODM
  */
  recommend = function(config,wcsresponse,res){
    // perform the POST
    var options = {
      url: config.odm.url,
      headers: {
         "accept": "application/json",
         "content-type": "application/json",
          authorization: config.odm.authtoken
      },
      method: 'POST'
    }
    var req=http.request(options, function(odmrep,res){
           res.status(200).send(odmrep);
    }); // prepare HTTP request
    req.write(JSON.stringify({wcscontext: wcsresponse}));
    req.end();
  }
}
