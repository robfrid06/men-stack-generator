import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  name: String,
});

const Resource = mongoose.model('Resource', resourceSchema);

export {
  Resource
}