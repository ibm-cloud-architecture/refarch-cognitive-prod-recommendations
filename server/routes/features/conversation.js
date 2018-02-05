/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
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
const watson = require('watson-developer-cloud');
const persist= require('./persist');
const odmclient = require('./ODMClient');

function sendToWCS(config, req, res){
  sendMessage(config,req.body,config.conversation.workspace,res).then(function(response) {
    if (config.debug) {console.log(" <<< From Advisor "+JSON.stringify(response));}
    response.text="<p>"+response.output.text[0]+"</p>";
    //  support multiple choices response
    if (response.context.action === "click") {
        response.text= response.text+ "<br/><a class=\"btn btn-primary\" href=\""+response.context.url+"\">"+response.context.buttonText+"</a>"
    }
    res.status(200).send(response);
  }).catch(function(error){
    if (error.Error !== undefined) {
      res.status(500).send({'text':error.Error});
    }
  });
}

module.exports = {
  /**
  Specific logic for the conversation related to Product recommendation.
  */
  chatWithMe : function(config,req,res) {
   if ( req.body.context !== undefined) {
     req.body.context.predefinedResponses="";
   }
   if (req.body.context !== undefined && req.body.context.action === "recommend") {
      odmclient.recommend(config,req.body.context,res, function(contextWithRecommendation){
        // remove action: "recommend"

        if (config.debug) {
          console.log('Context back to WCS with recommendation: ' + JSON.stringify(contextWithRecommendation));
        }
        req.body.context = contextWithRecommendation;
        sendToWCS(config,req,res);
      });
    } else {
      sendToWCS(config,req,res);
    }
 }
} // exports

// ------------------------------------------------------------
// Private
// ------------------------------------------------------------
var sendMessage = function(config,message,wkid,res,next){
  return new Promise(function(resolve, reject){
      if (message.context.conversation_id === undefined) {
          message.context["conversation_id"]=config.conversation.conversationId;
      }
      if (config.debug) {
          console.log("--- Connect to Watson Conversation named: " + config.conversation.conversationId);
          console.log(" To Advisor >>> "+JSON.stringify(message,null,2));
      }

      conversation = watson.conversation({
              username: config.conversation.username,
              password: config.conversation.password,
              version: config.conversation.version,
              version_date: config.conversation.versionDate});

      conversation.message(
          {
          workspace_id: wkid,
          input: {'text': message.text},
          context: message.context
          },
          function(err, response) {
            if (err) {
              console.log('error:', err);
              resolve({'Error': "Communication error with Watson Service. Please contact your administrator"});
            } else {
                  if (config.conversation.usePersistence) {
                      response.context.persistId=message.context.persistId;
                      response.context.revId=message.context.revId;
                      persist.saveConversation(config,response,function(persistRep){
                            response.context.persistId=persistRep.id;
                            response.context.revId=persistRep.rev;
                            console.log("Conversation persisted, response is now: "+JSON.stringify(response,null,2));
                            resolve(response);
                      });
                  } else {
                      resolve( response);
                  }
             }
          }
        );
    });
} // sendMessage
