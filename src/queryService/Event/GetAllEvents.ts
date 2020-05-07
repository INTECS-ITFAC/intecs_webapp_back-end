import dbGetAll from "../../database/GetAll";

const collectionName = "Events";

const getAllEvents = (callback: any) => {
  dbGetAll(collectionName, (result: any) => {
    callback(result);
  });
};

export default getAllEvents;
