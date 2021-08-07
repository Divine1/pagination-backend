const mongoose=require("mongoose")

const mongoconfig={
    uri : "mongodb://localhost:27017/demodb",
    options: {
        keepAlive: true,
        socketTimeoutMS: 100000,
        promiseLibrary: global.Promise,
        connectTimeoutMS:3600000,
        poolSize : 5,
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex : true
    }
}

const mongdb_conn = mongoose.createConnection(mongoconfig.uri,mongoconfig.options);


mongdb_conn.then((result)=>{
    console.log("Mongodb connection success ",result._readyState)
}).catch((err)=>{
    console.log("Mongodb connection err ",err)
});


module.exports={
    mongdb_conn
};