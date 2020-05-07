"use strict";
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const dbUrl="mongodb://localhost:27017"
// const dbName="AB"
// let db;
// const connect =(callback:any)=>{
//     MongoClient.connect(dbUrl, (err:any, client:any)=> {
//         assert.equal(null, err);
//         console.log("Connected successfully to server");
//          db = client.db(dbName);
//          callback(db);
//         });
// }
// const ins=()=>{
//     connect((db:any,err:any)=>{
//         if(err) console.log(err)
//         else{
//         const collection = db.collection('documents');
//         collection.insertMany([
//             {a : 1}, {a : 2}, {a : 3}
//           ], function(err:any, result:any) {
//             assert.equal(err, null);
//             assert.equal(3, result.result.n);
//             assert.equal(3, result.ops.length);
//             console.log("Inserted 3 documents into the collection");
//            // callback(result);
//           });
//         }
//     })
// }
// // const insertOne=()=>{
// //     MongoClient.connect(dbUrl, (err:any, client:any)=> {
// //         assert.equal(null, err);
// //         console.log("Connected successfully to server");
// //          db = client.db(dbName);
// //          collection = db.collection('documents');
// //          collection.insertMany([
// //             {a : 1}, {a : 2}, {a : 3}
// //           ], function(err:any, result:any) {
// //             assert.equal(err, null);
// //             assert.equal(3, result.result.n);
// //             assert.equal(3, result.ops.length);
// //             console.log("Inserted 3 documents into the collection");
// //           });
// //     //    insertDocuments("db",(call:any)=>{
// //     //     console.log(call)
// //     //    });
// //         client.close();
// //       });
// // }
// // const insertDocuments = (db:any, callback:any)=> {
// //     const collection = db.collection('documents');
// //     collection.insertMany([
// //       {a : 1}, {a : 2}, {a : 3}
// //     ], function(err:any, result:any) {
// //       assert.equal(err, null);
// //       assert.equal(3, result.result.n);
// //       assert.equal(3, result.ops.length);
// //       console.log("Inserted 3 documents into the collection");
// //       callback(result);
// //     });
// //   }
// //export default insertOne;
// export default ins;
