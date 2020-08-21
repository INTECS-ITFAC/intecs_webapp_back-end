import dbGetAll from "../../database/GetAll";
import { user as UserSchema } from "../../models/UserTypes";

const collectionName = "Users";

const getAllUsers = (callback: any) => {
  dbGetAll(collectionName, (result: any) => {
    const users: UserSchema[] = result.map((user: UserSchema) => {
      return {
        email: user.email,
        date: user.date,
        createdBy: user.createdBy,
      };
    });
    callback(users);
  });
};

export default getAllUsers;
