import {eventModel} from '../models/eventShema.js';
export const addEvent = async ({ title1, title2, description, date1, date2, image, image2 }) => {
  try {
    const newEvent = new eventModel({
      title1,
      title2,
      description,
      date1,
      date2,
      image,
      image2
    });

    await newEvent.save();
    return { data: 'Event created successfully', statuscode: 200 };
  } catch (err) {
    return { data: err.message, statuscode: 400 };
  }
};