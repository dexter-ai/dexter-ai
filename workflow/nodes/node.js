var Class = require('./Class').Class;


var Node = Class.extend({
    constructor: function(data){
        this.id = data.id;
        this.params = data.params;
        this.ran = false;

    },
    validate : function(){
        throw  "NotImplemented"
    },
    run : function() {
        throw  "NotImplemented"
    },
    init : function(){
        throw  "NotImplemented"
    },
    output : function(){
        throw  "NotImplemented"
    }



});



module.exports.Node = Node;
