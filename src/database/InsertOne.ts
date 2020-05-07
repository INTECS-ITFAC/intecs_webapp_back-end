const assert = require('assert');
import dbConnection from "./Connection";
const MongoClient = require('mongodb').MongoClient;


const dbInsertOne=(data:any,collectionName:string,callback:any)=>{
    dbConnection((db:any,err:any)=>{
        assert.equal(err, null);
        
        const collection = db.collection(collectionName);
        collection.insertOne(data, function(err:any, result:any) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            console.log("Inserted 1 documents into the collection");
            callback(result);
          });
    })
}

export default dbInsertOne;