import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import getAllUsers from "../../queryService/User/GetAllUsers";
import createUser from "../../commandService/User/UserInsert";

export class UserController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    createUser(req.body, (status: any, message: string, result: any) => {
      if (status) {
        res.json({ status: true, message: message, data: result });
      } else {
        res.status(400).json({
          status: false,
          message: message,
          data: null,
        });
      }
    });
  }

  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    getAllUsers((result: any) => {
      if (result) {
        res.json({ status: true, message: "get all users", data: result });
      } else {
        res.status(400).json({
          status: false,
          message: "internal server error",
          data: null,
        });
      }
    });
  }

  public update(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }

  public delete(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }
}
