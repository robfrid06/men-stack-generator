import mongoose from 'mongoose'

// Schema shorthand
const Schema = mongoose.Schema;

// Creating Schema
const resourceSchema = new Schema({
  name: String,
}, {
  timestamps: true
});

// Creating Model from Schema
const Resource = mongoose.model('Resource', resourceSchema);

export {
  Resource
}