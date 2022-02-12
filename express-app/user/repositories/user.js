const db = require("../../config/mongodb");

exports.add = (model, cb) =>{
    db.getCollection("user");
    collection.insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}