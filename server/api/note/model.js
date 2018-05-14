const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const schema = new Schema({
  author: { type: ObjectId, ref: 'User' },
  content: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: new Date
  },
  title: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Note', schema)