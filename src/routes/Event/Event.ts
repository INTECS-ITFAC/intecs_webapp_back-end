import express, { Request, Response } from 'express';
import { eventController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    eventController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    eventController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    eventController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    eventController.delete(req, res);
});