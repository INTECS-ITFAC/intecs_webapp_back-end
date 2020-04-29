import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'GET /user request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}