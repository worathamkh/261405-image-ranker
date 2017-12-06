const mongoose = require('mongoose');
// const counter = require('./counter');

const tournamentSchema = new mongoose.Schema({
    key: { type: String, index: true }, // key
    title: String,
    description: String,
    images: [{
        id: String, // key
        url: String,
        score: Number
    }],
    history: [{
        id: Number, // key (auto-incremental)
        winner: String, // image key
        loser: String // image key
    }]
});

// tourmanetSchema.pre('save', function (next) {
//     let doc = this;
//     let query = { for: 'tournament' };
//     let update = { for: 'tournament', $inc: { run: 1 } };
//     let options = { upsert: true, new: true };
//     counter.findOneAndUpdate(query, update, options, function (err, result) {
//         if (err) next(err);
//         doc.
//         next();
//     });
// });

const Tournament = mongoose.model('Tournament', tournamentSchema);
module.exports = Tournament;
