var Message = function(data){
    this.user = data.user;
    this.text = data.text;
    this.timestamp = data.ts;
    this.team = data.team;
};

module.exports.Message = Message;