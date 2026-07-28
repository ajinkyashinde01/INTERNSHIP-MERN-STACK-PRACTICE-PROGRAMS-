const mongoose = require("mongoose")

const databaseConnection=()=>{
    mongoose.connect('mongodb://ajinkyashinde38641_db_user:UOb7d2cFz4O66zh6@ac-1ljhu3m-shard-00-00.7ppulhc.mongodb.net:27017,ac-1ljhu3m-shard-00-01.7ppulhc.mongodb.net:27017,ac-1ljhu3m-shard-00-02.7ppulhc.mongodb.net:27017/?ssl=true&replicaSet=atlas-10w0m0-shard-0&authSource=admin&appName=Cluster0')
    .then (()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=databaseConnection