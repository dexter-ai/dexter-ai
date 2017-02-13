var Q = require('q');


var Workflow = function (data) {
    this.nodes = data.nodes;
    this.shouldSkip = data.shouldSkip;
    this.id = data.id;
};

Workflow.prototype.validate = function(callback){
        this.nodes.forEach(function (node) {
            if (node.validate() === false) {
                reject('Invalid Node: ' + node.id)
            }
        });
        callback()

};

Workflow.prototype.output = function(callback){

        var output = "";
        this.nodes.forEach(function(node) {
            output += node.output() + "\n";

        });
        callback(output)

};

Workflow.prototype.run = function(callback){
    var nodes = this.nodes;

        ///Executing sequentially
        var lastPromise = nodes.reduce(function (promise, node) {
            return promise
                .then(function (success) {
                    node.successfullRun = true;
                    node.ran = true;
                    console.log("node "+ node.id +" Success");
                    console.log(success);
                    return node.run()
                }).catch(function (error) {
                    node.ran = true;
                    node.successfullRun = false;
                    console.log("node "+ node.id +" Fail");
                    console.log(error);
                });
        }, Q.resolve());

        lastPromise
            .then(function () {
                console.log("Done");
                callback()
            })
            .catch(function (error) {
                console.log(error);
                callback()
            });

};


module.exports.Workflow = Workflow;
