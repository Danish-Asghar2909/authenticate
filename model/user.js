import mongoose from 'mongoose'

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password : {
    type : String,
    required : false,
    default : null
  },
  email : {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    immutable : true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

export default mongoose.model('user', subscriberSchema)