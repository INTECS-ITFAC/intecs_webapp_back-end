import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import createEvent from "../../commandService/Event/EventInsert";
import getAllEvents from "../../queryService/Event/GetAllEvents";

export class EventController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    createEvent(req.body, (result: any) => {
      if (result) {
        res.json({ status: true, message: "data inserted", data: result });
      } else {
        res.json({
          status: false,
          message: "internal server error",
          data: null,
        });
      }
    });
  }

  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    getAllEvents((result: any) => {
      if (result) {
        res.json({ status: true, message: "get all events", data: result });
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
