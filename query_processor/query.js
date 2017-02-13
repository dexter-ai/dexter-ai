var Workflow = require('../workflow/workflow').Workflow;
var Message = require('./models/incoming').Message;
var Yaml = require('../workflow/adapters/yaml').Yaml;


var Query = function(text){
    this.text = text

};

Query.prototype.getWorkFlow = function(){
    // Assumption - that message text is the file name of the workflow
    // later we will write complex logic of getting workflow file name from the message text

    var workflowName = this.text;
    return new Workflow(Yaml.createWorkerObject(workflowName));
};


module.exports.Query = Query;