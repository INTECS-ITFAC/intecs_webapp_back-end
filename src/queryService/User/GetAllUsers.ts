import dbGetAll from "../../database/GetAll";
import { user } from "../../models/UserTypes";

const collectionName = "Users";

const getAllUsers = (callback: any) => {
  dbGetAll(collectionName, (result: any) => {
    let users: user[] = result;
    users.map((user) => delete user.password);
    callback(result);
  });
};

export default getAllUsers;
