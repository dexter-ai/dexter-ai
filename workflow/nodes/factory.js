var API = require('./api').API;

function NodeFactory() {}


NodeFactory.createNode = function (type, data) {
    var node;

    if (type === "API") {
        node = new API(data);
    }else{
        throw 'NotImplementedError'
    }
    node.type = type;
    return node;
};

module.exports.NodeFactory = NodeFactory;

