'use strict';

var mongoose = require('mongoose');
// const counter = require('./counter');

var tournamentSchema = new mongoose.Schema({
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

var Tournament = mongoose.model('Tournament', tournamentSchema);
module.exports = Tournament;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYXMvdG91cm5hbWVudC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJ0b3VybmFtZW50U2NoZW1hIiwiU2NoZW1hIiwia2V5IiwidHlwZSIsIlN0cmluZyIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImlkIiwidXJsIiwic2NvcmUiLCJOdW1iZXIiLCJoaXN0b3J5Iiwid2lubmVyIiwibG9zZXIiLCJUb3VybmFtZW50IiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUNBOztBQUVBLElBQU1DLG1CQUFtQixJQUFJRixTQUFTRyxNQUFiLENBQW9CO0FBQ3pDQyxTQUFLLEVBQUVDLE1BQU1DLE1BQVIsRUFBZ0JDLE9BQU8sSUFBdkIsRUFEb0MsRUFDTDtBQUNwQ0MsV0FBT0YsTUFGa0M7QUFHekNHLGlCQUFhSCxNQUg0QjtBQUl6Q0ksWUFBUSxDQUFDO0FBQ0xDLFlBQUlMLE1BREMsRUFDTztBQUNaTSxhQUFLTixNQUZBO0FBR0xPLGVBQU9DO0FBSEYsS0FBRCxDQUppQztBQVN6Q0MsYUFBUyxDQUFDO0FBQ05KLFlBQUlHLE1BREUsRUFDTTtBQUNaRSxnQkFBUVYsTUFGRixFQUVVO0FBQ2hCVyxlQUFPWCxNQUhELENBR1E7QUFIUixLQUFEO0FBVGdDLENBQXBCLENBQXpCOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1ZLGFBQWFsQixTQUFTbUIsS0FBVCxDQUFlLFlBQWYsRUFBNkJqQixnQkFBN0IsQ0FBbkI7QUFDQWtCLE9BQU9DLE9BQVAsR0FBaUJILFVBQWpCIiwiZmlsZSI6InNjaGVtYXMvdG91cm5hbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbi8vIGNvbnN0IGNvdW50ZXIgPSByZXF1aXJlKCcuL2NvdW50ZXInKTtcblxuY29uc3QgdG91cm5hbWVudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGtleTogeyB0eXBlOiBTdHJpbmcsIGluZGV4OiB0cnVlIH0sIC8vIGtleVxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICBpbWFnZXM6IFt7XG4gICAgICAgIGlkOiBTdHJpbmcsIC8vIGtleVxuICAgICAgICB1cmw6IFN0cmluZyxcbiAgICAgICAgc2NvcmU6IE51bWJlclxuICAgIH1dLFxuICAgIGhpc3Rvcnk6IFt7XG4gICAgICAgIGlkOiBOdW1iZXIsIC8vIGtleSAoYXV0by1pbmNyZW1lbnRhbClcbiAgICAgICAgd2lubmVyOiBTdHJpbmcsIC8vIGltYWdlIGtleVxuICAgICAgICBsb3NlcjogU3RyaW5nIC8vIGltYWdlIGtleVxuICAgIH1dXG59KTtcblxuLy8gdG91cm1hbmV0U2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4vLyAgICAgbGV0IGRvYyA9IHRoaXM7XG4vLyAgICAgbGV0IHF1ZXJ5ID0geyBmb3I6ICd0b3VybmFtZW50JyB9O1xuLy8gICAgIGxldCB1cGRhdGUgPSB7IGZvcjogJ3RvdXJuYW1lbnQnLCAkaW5jOiB7IHJ1bjogMSB9IH07XG4vLyAgICAgbGV0IG9wdGlvbnMgPSB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlIH07XG4vLyAgICAgY291bnRlci5maW5kT25lQW5kVXBkYXRlKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuLy8gICAgICAgICBpZiAoZXJyKSBuZXh0KGVycik7XG4vLyAgICAgICAgIGRvYy5cbi8vICAgICAgICAgbmV4dCgpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG5cbmNvbnN0IFRvdXJuYW1lbnQgPSBtb25nb29zZS5tb2RlbCgnVG91cm5hbWVudCcsIHRvdXJuYW1lbnRTY2hlbWEpO1xubW9kdWxlLmV4cG9ydHMgPSBUb3VybmFtZW50O1xuIl19
