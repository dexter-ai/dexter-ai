var YAML = require('yamljs');
var NodeFactory = require('./../nodes/factory').NodeFactory;
var Yaml = function (){

};

Yaml.createWorkerObject = function(location){
    this.nativeObject = YAML.load(location);
    var workerObject = {
        id: this.nativeObject.id,
        shouldSkip: this.nativeObject.shouldSkip,
        nodes: []
    };
    this.nativeObject.nodes.forEach(function (node){
        workerObject.nodes.push(NodeFactory.createNode(node.type, node))
    });
    return workerObject;

};

module.exports.Yaml = Yaml;