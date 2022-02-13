module.exports = class Tweet {
    constructor(content, timestamp, userID, id){
        this._id = id;
        this.content = content;
        this.timestamp = timestamp;
        this.userID = userID;
    }
}