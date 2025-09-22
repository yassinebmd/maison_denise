import { residenceModel } from '../models/residenceShema.js';

export const addResidence = async ({ title1, title2, author, date1, description, image }) => {
  try {
    const newResidence = new residenceModel({
      title1,
      title2,
      author,
      date1: new Date(date1),
      description,
      image,
    });

    await newResidence.save();
    return { data: 'Residence created successfully', statuscode: 200 };
  } catch (err) {
    console.error("Error adding residence:", err);
    return { data: err.message, statuscode: 400 };
  }
};
