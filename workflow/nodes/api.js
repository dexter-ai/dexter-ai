var Node = require('./node').Node;
var request = require('request');


var API = Node.extend({

    constructor: function(data){
      API.super.constructor.call(this, data);
    },

    validate : function(){
        return true;
    },

    run : function(){
        var url = this.params.url;
        return new Promise(function (resolve, reject) {
            request
                .get(url)
                .on('error', function(){
                    reject(false);
                })
                .on('response', function(){
                    resolve(true);
                });

        });

    },

    output : function(){
        if(this.successfullRun === true){
            return this.params.output.success;
        }else{
            return this.params.output.error;
        }
    }

});

module.exports.API = API;