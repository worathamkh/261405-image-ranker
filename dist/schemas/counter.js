const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    for: { type: String, index: true }, // for other schema
    run: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;
