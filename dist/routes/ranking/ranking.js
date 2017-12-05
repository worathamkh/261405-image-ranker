'use strict';

// 

var mongoose = require('mongoose');
var Tournament = require('../../schemas/tournament');

module.exports.default = function (router) {
    router.get('/ranking/:key', function (req, res) {
        Tournament.findOne({ key: req.params.key }, function (err, tournament) {
            if (err) res.send(503);
            var data = {
                // csrfToken: req.csrfToken()
                title: tournament.title,
                description: tournament.description,
                images: tournament.images.map(function (img) {
                    return img.url;
                })
            };
            var vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('tournament/tournament', data, vueOptions);
        });
    });
    // router.post('/create', upload.array('images', 32), (req, res) => {
    //     generateAnimal('pascal').then((animal) => {
    //         imgur.uploadImages(req.files.map((img) => img.path), 'File' [>, albumId <])
    //             .then((images) => {
    //                 let data = {
    //                     key: animal,
    //                     title: req.body.title,
    //                     description: req.body.description,
    //                     images: images.map((img) => {
    //                         return {
    //                             url: img.link,
    //                             score: 0
    //                         };
    //                     }),
    //                     history: []
    //                 };
    //                 let tournament = new Tournament(data);
    //                 tournament.save((err, product) => {
    //                     if (err) res.json({ success: false });
    //                     res.json({ success: true, object: product });
    //
    //                     // const data = {
    //                     //     title: 'Hello World',
    //                     //     message: 'POST',
    //                     //     body: req.body
    //                     // };
    //                     // const vueOptions = {
    //                     //     head: {
    //                     //         title: 'Tournament created'
    //                     //     }
    //                     // };
    //                     // res.renderVue('post/post', data, vueOptions);
    //                 });
    //             })
    //             .catch((err) => {
    //                 console.error(err.message);
    //                 res.send(503);
    //             });
    //     });
    // });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9yYW5raW5nL3JhbmtpbmcuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVG91cm5hbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwiZmluZE9uZSIsImtleSIsInBhcmFtcyIsImVyciIsInRvdXJuYW1lbnQiLCJzZW5kIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJtYXAiLCJpbWciLCJ1cmwiLCJ2dWVPcHRpb25zIiwiaGVhZCIsInJlbmRlclZ1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxhQUFhRCxRQUFRLDBCQUFSLENBQW5COztBQUVBRSxPQUFPQyxPQUFQLENBQWVDLE9BQWYsR0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pDQSxXQUFPQyxHQUFQLENBQVcsZUFBWCxFQUE0QixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN0Q1AsbUJBQVdRLE9BQVgsQ0FBbUIsRUFBRUMsS0FBS0gsSUFBSUksTUFBSixDQUFXRCxHQUFsQixFQUFuQixFQUE0QyxVQUFDRSxHQUFELEVBQU1DLFVBQU4sRUFBcUI7QUFDN0QsZ0JBQUlELEdBQUosRUFBU0osSUFBSU0sSUFBSixDQUFTLEdBQVQ7QUFDVCxnQkFBTUMsT0FBTztBQUNUO0FBQ0FDLHVCQUFPSCxXQUFXRyxLQUZUO0FBR1RDLDZCQUFhSixXQUFXSSxXQUhmO0FBSVRDLHdCQUFRTCxXQUFXSyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxHQUFEO0FBQUEsMkJBQVNBLElBQUlDLEdBQWI7QUFBQSxpQkFBdEI7QUFKQyxhQUFiO0FBTUEsZ0JBQU1DLGFBQWE7QUFDZkMsc0JBQU07QUFDRlAsMkJBQU9ILFdBQVdHLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkJILFdBQVdJO0FBRDNDO0FBRFMsYUFBbkI7QUFLQVQsZ0JBQUlnQixTQUFKLENBQWMsdUJBQWQsRUFBdUNULElBQXZDLEVBQTZDTyxVQUE3QztBQUNILFNBZEQ7QUFlSCxLQWhCRDtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBMUREIiwiZmlsZSI6InJvdXRlcy9yYW5raW5nL3JhbmtpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcblxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgVG91cm5hbWVudCA9IHJlcXVpcmUoJy4uLy4uL3NjaGVtYXMvdG91cm5hbWVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gKHJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5nZXQoJy9yYW5raW5nLzprZXknLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgVG91cm5hbWVudC5maW5kT25lKHsga2V5OiByZXEucGFyYW1zLmtleSB9LCAoZXJyLCB0b3VybmFtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAvLyBjc3JmVG9rZW46IHJlcS5jc3JmVG9rZW4oKVxuICAgICAgICAgICAgICAgIHRpdGxlOiB0b3VybmFtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b3VybmFtZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGltYWdlczogdG91cm5hbWVudC5pbWFnZXMubWFwKChpbWcpID0+IGltZy51cmwpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b3VybmFtZW50LnRpdGxlICsgJyAtICcgKyB0b3VybmFtZW50LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcy5yZW5kZXJWdWUoJ3RvdXJuYW1lbnQvdG91cm5hbWVudCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyByb3V0ZXIucG9zdCgnL2NyZWF0ZScsIHVwbG9hZC5hcnJheSgnaW1hZ2VzJywgMzIpLCAocmVxLCByZXMpID0+IHtcbiAgICAvLyAgICAgZ2VuZXJhdGVBbmltYWwoJ3Bhc2NhbCcpLnRoZW4oKGFuaW1hbCkgPT4ge1xuICAgIC8vICAgICAgICAgaW1ndXIudXBsb2FkSW1hZ2VzKHJlcS5maWxlcy5tYXAoKGltZykgPT4gaW1nLnBhdGgpLCAnRmlsZScgWz4sIGFsYnVtSWQgPF0pXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oKGltYWdlcykgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGtleTogYW5pbWFsLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcS5ib2R5LnRpdGxlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBpbWFnZXMubWFwKChpbWcpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGltZy5saW5rLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogMFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdXG4gICAgLy8gICAgICAgICAgICAgICAgIH07XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCB0b3VybmFtZW50ID0gbmV3IFRvdXJuYW1lbnQoZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuc2F2ZSgoZXJyLCBwcm9kdWN0KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBvYmplY3Q6IHByb2R1Y3QgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdIZWxsbyBXb3JsZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ1BPU1QnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJvZHk6IHJlcS5ib2R5XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9O1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWFkOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRpdGxlOiAnVG91cm5hbWVudCBjcmVhdGVkJ1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH07XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyByZXMucmVuZGVyVnVlKCdwb3N0L3Bvc3QnLCBkYXRhLCB2dWVPcHRpb25zKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzLnNlbmQoNTAzKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSk7XG59O1xuIl19
