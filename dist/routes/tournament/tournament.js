'use strict';

// 

var mongoose = require('mongoose');
var Tournament = require('../../schemas/tournament');

module.exports.default = function (router) {
    // router.post('/create', upload.array('images', 32), (req, res) => {
    router.get('/tournament/:key', function (req, res) {
        Tournament.findOne({ key: req.params.key }, function (err, tournament) {
            if (err) res.send(503);
            var len = tournament.images.length;
            var leftId = Math.floor(Math.random() * len);
            var rightId = Math.floor(Math.random() * len);
            while (len > 0 && leftId === rightId) {
                rightId = Math.floor(Math.random() * len);
            }
            var data = {
                // csrfToken: req.csrfToken()
                title: tournament.title,
                description: tournament.description,
                left: tournament.images[leftId].url,
                right: tournament.images[rightId].url
            };
            console.log(data);
            var vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('tournament/tournament', data, vueOptions);
        });
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b3VybmFtZW50L3RvdXJuYW1lbnQuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVG91cm5hbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwiZmluZE9uZSIsImtleSIsInBhcmFtcyIsImVyciIsInRvdXJuYW1lbnQiLCJzZW5kIiwibGVuIiwiaW1hZ2VzIiwibGVuZ3RoIiwibGVmdElkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmlnaHRJZCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVmdCIsInVybCIsInJpZ2h0IiwiY29uc29sZSIsImxvZyIsInZ1ZU9wdGlvbnMiLCJoZWFkIiwicmVuZGVyVnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1DLGFBQWFELFFBQVEsMEJBQVIsQ0FBbkI7O0FBRUFFLE9BQU9DLE9BQVAsQ0FBZUMsT0FBZixHQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDakM7QUFDQUEsV0FBT0MsR0FBUCxDQUFXLGtCQUFYLEVBQStCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pDUCxtQkFBV1EsT0FBWCxDQUFtQixFQUFFQyxLQUFLSCxJQUFJSSxNQUFKLENBQVdELEdBQWxCLEVBQW5CLEVBQTRDLFVBQUNFLEdBQUQsRUFBTUMsVUFBTixFQUFxQjtBQUM3RCxnQkFBSUQsR0FBSixFQUFTSixJQUFJTSxJQUFKLENBQVMsR0FBVDtBQUNULGdCQUFNQyxNQUFNRixXQUFXRyxNQUFYLENBQWtCQyxNQUE5QjtBQUNBLGdCQUFJQyxTQUFTQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JOLEdBQTNCLENBQWI7QUFDQSxnQkFBSU8sVUFBVUgsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCTixHQUEzQixDQUFkO0FBQ0EsbUJBQU9BLE1BQU0sQ0FBTixJQUFXRyxXQUFXSSxPQUE3QixFQUFzQztBQUNsQ0EsMEJBQVVILEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQk4sR0FBM0IsQ0FBVjtBQUNIO0FBQ0QsZ0JBQU1RLE9BQU87QUFDVDtBQUNBQyx1QkFBT1gsV0FBV1csS0FGVDtBQUdUQyw2QkFBYVosV0FBV1ksV0FIZjtBQUlUQyxzQkFBTWIsV0FBV0csTUFBWCxDQUFrQkUsTUFBbEIsRUFBMEJTLEdBSnZCO0FBS1RDLHVCQUFPZixXQUFXRyxNQUFYLENBQWtCTSxPQUFsQixFQUEyQks7QUFMekIsYUFBYjtBQU9BRSxvQkFBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0EsZ0JBQU1RLGFBQWE7QUFDZkMsc0JBQU07QUFDRlIsMkJBQU9YLFdBQVdXLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkJYLFdBQVdZO0FBRDNDO0FBRFMsYUFBbkI7QUFLQWpCLGdCQUFJeUIsU0FBSixDQUFjLHVCQUFkLEVBQXVDVixJQUF2QyxFQUE2Q1EsVUFBN0M7QUFDSCxTQXRCRDtBQXVCSCxLQXhCRDtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWxFRCIsImZpbGUiOiJyb3V0ZXMvdG91cm5hbWVudC90b3VybmFtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5cbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IFRvdXJuYW1lbnQgPSByZXF1aXJlKCcuLi8uLi9zY2hlbWFzL3RvdXJuYW1lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IChyb3V0ZXIpID0+IHtcbiAgICAvLyByb3V0ZXIucG9zdCgnL2NyZWF0ZScsIHVwbG9hZC5hcnJheSgnaW1hZ2VzJywgMzIpLCAocmVxLCByZXMpID0+IHtcbiAgICByb3V0ZXIuZ2V0KCcvdG91cm5hbWVudC86a2V5JywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIFRvdXJuYW1lbnQuZmluZE9uZSh7IGtleTogcmVxLnBhcmFtcy5rZXkgfSwgKGVyciwgdG91cm5hbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVzLnNlbmQoNTAzKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRvdXJuYW1lbnQuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBsZWZ0SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xuICAgICAgICAgICAgbGV0IHJpZ2h0SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xuICAgICAgICAgICAgd2hpbGUgKGxlbiA+IDAgJiYgbGVmdElkID09PSByaWdodElkKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIC8vIGNzcmZUb2tlbjogcmVxLmNzcmZUb2tlbigpXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvdXJuYW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvdXJuYW1lbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGVmdDogdG91cm5hbWVudC5pbWFnZXNbbGVmdElkXS51cmwsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRvdXJuYW1lbnQuaW1hZ2VzW3JpZ2h0SWRdLnVybFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b3VybmFtZW50LnRpdGxlICsgJyAtICcgKyB0b3VybmFtZW50LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcy5yZW5kZXJWdWUoJ3RvdXJuYW1lbnQvdG91cm5hbWVudCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyAgICAgZ2VuZXJhdGVBbmltYWwoJ3Bhc2NhbCcpLnRoZW4oKGFuaW1hbCkgPT4ge1xuICAgIC8vICAgICAgICAgaW1ndXIudXBsb2FkSW1hZ2VzKHJlcS5maWxlcy5tYXAoKGltZykgPT4gaW1nLnBhdGgpLCAnRmlsZScgWz4sIGFsYnVtSWQgPF0pXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oKGltYWdlcykgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGtleTogYW5pbWFsLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcS5ib2R5LnRpdGxlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBpbWFnZXMubWFwKChpbWcpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGltZy5saW5rLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogMFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdXG4gICAgLy8gICAgICAgICAgICAgICAgIH07XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCB0b3VybmFtZW50ID0gbmV3IFRvdXJuYW1lbnQoZGF0YSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuc2F2ZSgoZXJyLCBwcm9kdWN0KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBvYmplY3Q6IHByb2R1Y3QgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdIZWxsbyBXb3JsZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ1BPU1QnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJvZHk6IHJlcS5ib2R5XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9O1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWFkOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRpdGxlOiAnVG91cm5hbWVudCBjcmVhdGVkJ1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH07XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyByZXMucmVuZGVyVnVlKCdwb3N0L3Bvc3QnLCBkYXRhLCB2dWVPcHRpb25zKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzLnNlbmQoNTAzKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSk7XG59O1xuIl19
