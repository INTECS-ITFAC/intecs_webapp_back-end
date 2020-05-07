import { event } from "../models/EventTypes";
import dbInsertOne from "../database/InsertOne";
const collectionName="Events";

const createEvent = (data: event) => {
    const event: event = {
        title: data.title,
        imgUrl: data.imgUrl,
        description: data.description
    }
    dbInsertOne(event, collectionName, (result: any) => {
        console.log(result.ops)
    });
}

export default createEvent;