const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//This creates our database tables
const eventSchema = new Schema({
  username: { type: String, required: true },
  event: { type: String, required: true },

}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

