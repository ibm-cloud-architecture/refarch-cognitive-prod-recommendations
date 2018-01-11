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
const watson = require('watson-developer-cloud');
//const persist= require('./persist');
const odmclient = require('./ODMClient');

module.exports = {
  /**
  Specific logic for the conversation related to Product recommendation.
  */
  chatWithMe : function(config,req,res) {
   if ( req.body.context !== undefined) {
     req.body.context.action="";
     req.body.context.predefinedResponses="";
   }
   sendMessage(config,req.body,config.conversation.workspace,res,function(config,res,response) {
       if (config.debug) {console.log(" <<< from Advisor"+JSON.stringify(response,null,2));}
       if (response.Error !== undefined) {
         res.status(500).send({'text':response.Error});
       } else if (response.context.action === "recommend") {
           odmclient.recommend(config,response,res, function(odmResponse){
             if (config.debug) {
                 console.log('Sent back to WCS: ' +JSON.stringify(odmResponse,null,2) );
             }
            sendMessage(config,odmResponse,config.conversation.workspace,res,
                 function(config,res,response){
                   res.status(200).send(response);
                 });
           });

       }else {
           response.text="<p>"+response.output.text[0]+"</p>";
           //  support multiple choices response
           if (response.context.action === "click") {
               response.text= response.text+ "<br/><a class=\"btn btn-primary\" href=\""+response.context.url+"\">"+response.context.buttonText+"</a>"
           }
         res.status(200).send(response);
       }
   });
 }
} // exports

// ------------------------------------------------------------
// Private
// ------------------------------------------------------------
var sendMessage = function(config,message,wkid,res,next){
  if (config.debug) {
      console.log("--- Connect to Watson Conversation named: " + config.conversation.conversationId);
      console.log(" To Advisor >>> "+JSON.stringify(message,null,2));
  }
  if (message.context.conversation_id === undefined) {
      message.context["conversation_id"]=config.conversation.conversationId;
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
          next(config,res,{'Error': "Communication error with Watson Service. Please contact your administrator"});
        } else {
          if (config.conversation.usePersistence) {
              response.context.persistId=message.context.persistId;
              response.context.revId=message.context.revId;
              persist.saveConversation(config,response,function(persistRep){
                    response.context.persistId=persistRep.id;
                    response.context.revId=persistRep.rev;
                    console.log("Conversation persisted, response is now: "+JSON.stringify(response,null,2));
                    next(config,res,response);
              });
          } else {
              next(config,res,response);
          }
        }
      }
    );

} // sendMessage
