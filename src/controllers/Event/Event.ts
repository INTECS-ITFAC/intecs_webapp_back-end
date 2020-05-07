import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import createEvent from '../../commandService/EventCommandService';

export class EventController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        createEvent(req.body);
        res.json({ message: 'Post /event request received', data: req.body });
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'GET /event request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}