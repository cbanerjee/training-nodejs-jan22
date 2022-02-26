const db = require("../../../config/mongodb");
const {ObjectId} = require("mongodb");

// This is an optional function to help replacing all the user method fetchers used in this code
const getTweetCollection = () =>{
    return db.getCollection("tweet");
}

const getUserCollection = () =>{
    return db.getCollection("user");
}

exports.add = (model, cb)=>{
    // Step 1: Access collection.
    getTweetCollection().insertOne({content: model.content, timestamp: model.timestamp, userID: ObjectId(model.userID)})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}


exports.getByEmail = (email, cb)=>{
    getUserCollection().findOne({email})
        .then(
            (record) => findTweet(record),
            (err) => console.log(err)
        )
    function findTweet (user) {
        // console.log(JSON.stringify(user));
        var user_ID = user._id;

        getTweetCollection().find({"userID": user_ID}).toArray((err,result)=>{
            if(err) {
                console.log(err);
            } else {
                console.log(result);
                return cb(result);
            }
        })        
    }
}


exports.getByUserID = (id, cb)=>{
    // Step 1: Access collection.
    console.log(id);
    getTweetCollection().find({userID: ObjectId(id)}).toArray()
        .then((tweets)=>{
            cb(tweets);
        },
        err=>{throw new Error(err);})
}