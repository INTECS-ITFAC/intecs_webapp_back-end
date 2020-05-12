import dbGetAll from "../../database/GetAll";

const collectionName = "Users";

const getAllUsers = (callback: any) => {
  dbGetAll(collectionName, (result: any) => {
    callback(result);
  });
};

export default getAllUsers;
