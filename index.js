var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var Query = require('./query_processor/query').Query;
var SLACK_BOT_TOKEN = require('./config').SLACK_BOT_TOKEN;
var SLACK_CHANNEL_ID = require('./config').SLACK_CHANNEL_ID;


var slackRTMClient = new RtmClient(SLACK_BOT_TOKEN);

slackRTMClient.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {

    // Simple POC

    try {
        // In future, will write a model
        var workflow = new Query(message.text).getWorkFlow();
        workflow.validate(function(){
            workflow.run(function(){
                workflow.output(function(output){
                    slackRTMClient.sendMessage(output, SLACK_CHANNEL_ID);
                });
            });
        });

    }catch(err){
        console.log(err.message);
    }


});


slackRTMClient.start();