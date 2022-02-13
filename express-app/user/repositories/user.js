const db = require("../../config/mongodb");
const {ObjectId} = require("mongodb");

exports.add = (model, cb) =>{
    const collection = db.getCollection("user");

    collection.insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}

exports.update = (model, cb) =>{
    //Get Collection
    const collection = db.getCollection("user");

    //Define how to find the document
    const filter = {_id: ObjectId(model._id)};

    //Define what to update and then set operator
    const update = {$set: {name: model.name, password: model.password, gender: model.gender}};

    collection.findOneAndUpdate(filter, update)
    .then(()=>{
        cb()
    },
    err=> {console.log(err)})
}