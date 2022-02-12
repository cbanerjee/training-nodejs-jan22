const mongoDbClient = require("mongodb").MongoClient;

const url = "mongodb+srv://chuni1998:oqqFjTXFjUsqh5Ry@cluster0.fikhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

exports.connect = () =>{
    mongoDbClient.connect(url)
        .then(
            (client)=>{
                console.log("MongoDB is connected");
            },
            (err) => {console.log(err);}
        )
}

exports.getCollection = (name) =>{
    return dbClient.db("twitterapp").collection(name);
}