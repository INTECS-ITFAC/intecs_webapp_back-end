import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import getAllUsers from "../../queryService/User/GetAllUsers";

export class UserController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }

  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    getAllUsers((result: any) => {
      if (result) {
        res.json({ status: true, message: "get all users", data: result });
      } else {
        res.json({
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
