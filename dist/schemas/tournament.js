'use strict';

var mongoose = require('mongoose');
// const counter = require('./counter');

var tournamentSchema = new mongoose.Schema({
    key: { type: String, index: true }, // key
    title: String,
    description: String,
    images: [{
        url: String, // key
        score: Number
    }],
    history: [{
        // id: Number, // key (auto-incremental)
        winner: String, // image url
        loser: String // image url
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

var Tournament = mongoose.model('Tournament', tournamentSchema);
module.exports = Tournament;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYXMvdG91cm5hbWVudC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJ0b3VybmFtZW50U2NoZW1hIiwiU2NoZW1hIiwia2V5IiwidHlwZSIsIlN0cmluZyIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsInVybCIsInNjb3JlIiwiTnVtYmVyIiwiaGlzdG9yeSIsIndpbm5lciIsImxvc2VyIiwiVG91cm5hbWVudCIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFDQTs7QUFFQSxJQUFNQyxtQkFBbUIsSUFBSUYsU0FBU0csTUFBYixDQUFvQjtBQUN6Q0MsU0FBSyxFQUFFQyxNQUFNQyxNQUFSLEVBQWdCQyxPQUFPLElBQXZCLEVBRG9DLEVBQ0w7QUFDcENDLFdBQU9GLE1BRmtDO0FBR3pDRyxpQkFBYUgsTUFINEI7QUFJekNJLFlBQVEsQ0FBQztBQUNMQyxhQUFLTCxNQURBLEVBQ1E7QUFDYk0sZUFBT0M7QUFGRixLQUFELENBSmlDO0FBUXpDQyxhQUFTLENBQUM7QUFDTjtBQUNBQyxnQkFBUVQsTUFGRixFQUVVO0FBQ2hCVSxlQUFPVixNQUhELENBR1E7QUFIUixLQUFEO0FBUmdDLENBQXBCLENBQXpCOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVcsYUFBYWpCLFNBQVNrQixLQUFULENBQWUsWUFBZixFQUE2QmhCLGdCQUE3QixDQUFuQjtBQUNBaUIsT0FBT0MsT0FBUCxHQUFpQkgsVUFBakIiLCJmaWxlIjoic2NoZW1hcy90b3VybmFtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuLy8gY29uc3QgY291bnRlciA9IHJlcXVpcmUoJy4vY291bnRlcicpO1xuXG5jb25zdCB0b3VybmFtZW50U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAga2V5OiB7IHR5cGU6IFN0cmluZywgaW5kZXg6IHRydWUgfSwgLy8ga2V5XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICAgIGltYWdlczogW3tcbiAgICAgICAgdXJsOiBTdHJpbmcsIC8vIGtleVxuICAgICAgICBzY29yZTogTnVtYmVyXG4gICAgfV0sXG4gICAgaGlzdG9yeTogW3tcbiAgICAgICAgLy8gaWQ6IE51bWJlciwgLy8ga2V5IChhdXRvLWluY3JlbWVudGFsKVxuICAgICAgICB3aW5uZXI6IFN0cmluZywgLy8gaW1hZ2UgdXJsXG4gICAgICAgIGxvc2VyOiBTdHJpbmcgLy8gaW1hZ2UgdXJsXG4gICAgfV1cbn0pO1xuXG4vLyB0b3VybWFuZXRTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcbi8vICAgICBsZXQgZG9jID0gdGhpcztcbi8vICAgICBsZXQgcXVlcnkgPSB7IGZvcjogJ3RvdXJuYW1lbnQnIH07XG4vLyAgICAgbGV0IHVwZGF0ZSA9IHsgZm9yOiAndG91cm5hbWVudCcsICRpbmM6IHsgcnVuOiAxIH0gfTtcbi8vICAgICBsZXQgb3B0aW9ucyA9IHsgdXBzZXJ0OiB0cnVlLCBuZXc6IHRydWUgfTtcbi8vICAgICBjb3VudGVyLmZpbmRPbmVBbmRVcGRhdGUocXVlcnksIHVwZGF0ZSwgb3B0aW9ucywgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4vLyAgICAgICAgIGlmIChlcnIpIG5leHQoZXJyKTtcbi8vICAgICAgICAgZG9jLlxuLy8gICAgICAgICBuZXh0KCk7XG4vLyAgICAgfSk7XG4vLyB9KTtcblxuY29uc3QgVG91cm5hbWVudCA9IG1vbmdvb3NlLm1vZGVsKCdUb3VybmFtZW50JywgdG91cm5hbWVudFNjaGVtYSk7XG5tb2R1bGUuZXhwb3J0cyA9IFRvdXJuYW1lbnQ7XG4iXX0=
