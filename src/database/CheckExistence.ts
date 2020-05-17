const assert = require("assert");
import dbConnection from "./Connection";

const checkExistence = (collectionName: string, value: any, callback: any) => {
  dbConnection((db: any, err: any) => {
    assert.equal(err, null);

    const collection = db.collection(collectionName);
    collection.find({ email: value }).toArray(function (err: any, result: any) {
      assert.equal(err, null);

      callback(result.length != 0);
    });
  });
};

export default checkExistence;
