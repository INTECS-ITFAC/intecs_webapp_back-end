import { UserController } from './User/User';
import { EventController } from './Event/Event';

const userController = new UserController();
const eventController = new EventController();

export {
    userController,
    eventController
};