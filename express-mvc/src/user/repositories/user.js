const db = require("../../config/mongodb");
const {ObjectId} = require("mongodb");

// This is an optional function to help replacing all the user method fetchers used in this code
const getUserCollection = () =>{
    return db.getCollection("user");
}

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
    const update = {$set: {name: model.name, email:model.email, password: model.password, gender: model.gender}};

    collection.findOneAndUpdate(filter, update)
    .then(()=>{
        cb()
    },
    err=> {console.log(err)})
}

exports.getByID = (id, cb)=>{
    //get Collection
    const collection = db.getCollection("user");

    //Find data
    collection.findOne({_id: ObjectId(id)})
        .then((user)=>cb(user),
            err=>{console.log(err)})
}

exports.deleteByID = (id, cb) =>{
    const collection = db.getCollection("user");

    collection.deleteOne({_id: ObjectId(id)})
        .then((user)=>cb(user),
        (err)=>{console.log(err)});
}

exports.getByEmail = (email, cb) =>{
    getUserCollection().findOne({email})
        .then (
            (record) =>{
                cb(record);
            },
            err => (console.log(err))
        )
}