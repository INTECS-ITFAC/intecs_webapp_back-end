import { event } from "../../models/EventTypes";
import dbInsertOne from "../../database/InsertOne";
const collectionName = "Events";

const createEvent = (data: event, callback: any) => {
  let currentDate: Date = new Date();
  const event: event = {
    title: data.title,
    imgUrl: data.imgUrl,
    description: data.description,
    date: currentDate,
  };
  dbInsertOne(event, collectionName, (result: any) => {
    callback(result.ops);
  });
};

export default createEvent;
