const assert = require("assert");
import dbConnection from "./Connection";

const dbGetAll = (collectionName: string, callback: any) => {
  dbConnection((db: any, err: any) => {
    assert.equal(err, null);

    const collection = db.collection(collectionName);
    collection.find({}).toArray(function (err: any, result: any) {
      assert.equal(err, null);
      callback(result);
    });
  });
};

export default dbGetAll;
