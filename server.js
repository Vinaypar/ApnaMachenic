const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userMessage: String,
    vehicleType: String,
    issue: String,
    date: String,
    timestamp: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);
