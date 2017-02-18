var config = require('./config');
var SLACK_BOT_TOKEN  = config.get('SLACK_BOT_TOKEN');
var SLACK_CHANNEL_ID = config.get('SLACK_CHANNEL_ID');

var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var Query = require('./query_processor/query').Query;
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
