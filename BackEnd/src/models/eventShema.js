import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title1: String,
  title2: String,
  description: String,
  date1: Date,
  date2: Date,
  image: {
    data: Buffer,
    contentType: String
  },
  image2: {
    data: Buffer,
    contentType: String
  }
});

export const eventModel = mongoose.model('Events',eventSchema)