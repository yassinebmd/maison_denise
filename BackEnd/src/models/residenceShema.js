import mongoose from 'mongoose';

const residenceSchema = new mongoose.Schema({
  title1: String,
  title2: String,
  author: String,
  date1: Date,
  description: String,
  image: {
    data: Buffer,
    contentType: String
  }
});

export const residenceModel = mongoose.model('Residence',residenceSchema)