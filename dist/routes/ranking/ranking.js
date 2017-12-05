'use strict';

// 

var mongoose = require('mongoose');
var Tournament = require('../../schemas/tournament');

module.exports.default = function (router) {
    router.get('/ranking/:key', function (req, res) {
        Tournament.findOne({ key: req.params.key }, function (err, tournament) {
            if (err) res.send(503);
            var rankedImages = tournament.images.map(function (img) {
                return {
                    id: img.id,
                    url: img.url,
                    score: img.score
                };
            });
            rankedImages.sort(function (a, b) {
                return b.score - a.score;
            });
            var data = {
                title: tournament.title,
                description: tournament.description,
                rankedImages: rankedImages
            };
            var vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('ranking/ranking', data, vueOptions);
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9yYW5raW5nL3JhbmtpbmcuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVG91cm5hbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwicm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwiZmluZE9uZSIsImtleSIsInBhcmFtcyIsImVyciIsInRvdXJuYW1lbnQiLCJzZW5kIiwicmFua2VkSW1hZ2VzIiwiaW1hZ2VzIiwibWFwIiwiaW1nIiwiaWQiLCJ1cmwiLCJzY29yZSIsInNvcnQiLCJhIiwiYiIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidnVlT3B0aW9ucyIsImhlYWQiLCJyZW5kZXJWdWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsYUFBYUQsUUFBUSwwQkFBUixDQUFuQjs7QUFFQUUsT0FBT0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQ0EsV0FBT0MsR0FBUCxDQUFXLGVBQVgsRUFBNEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdENQLG1CQUFXUSxPQUFYLENBQW1CLEVBQUVDLEtBQUtILElBQUlJLE1BQUosQ0FBV0QsR0FBbEIsRUFBbkIsRUFBNEMsVUFBQ0UsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQzdELGdCQUFJRCxHQUFKLEVBQVNKLElBQUlNLElBQUosQ0FBUyxHQUFUO0FBQ1QsZ0JBQUlDLGVBQWVGLFdBQVdHLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQsRUFBUztBQUM5Qyx1QkFBTztBQUNIQyx3QkFBSUQsSUFBSUMsRUFETDtBQUVIQyx5QkFBS0YsSUFBSUUsR0FGTjtBQUdIQywyQkFBT0gsSUFBSUc7QUFIUixpQkFBUDtBQUtILGFBTmtCLENBQW5CO0FBT0FOLHlCQUFhTyxJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHVCQUFVQSxFQUFFSCxLQUFGLEdBQVVFLEVBQUVGLEtBQXRCO0FBQUEsYUFBbEI7QUFDQSxnQkFBTUksT0FBTztBQUNUQyx1QkFBT2IsV0FBV2EsS0FEVDtBQUVUQyw2QkFBYWQsV0FBV2MsV0FGZjtBQUdUWiw4QkFBY0E7QUFITCxhQUFiO0FBS0EsZ0JBQU1hLGFBQWE7QUFDZkMsc0JBQU07QUFDRkgsMkJBQU9iLFdBQVdhLEtBQVgsR0FBbUIsS0FBbkIsR0FBMkJiLFdBQVdjO0FBRDNDO0FBRFMsYUFBbkI7QUFLQW5CLGdCQUFJc0IsU0FBSixDQUFjLGlCQUFkLEVBQWlDTCxJQUFqQyxFQUF1Q0csVUFBdkM7QUFDSCxTQXJCRDtBQXNCSCxLQXZCRDtBQXdCSCxDQXpCRCIsImZpbGUiOiJyb3V0ZXMvcmFua2luZy9yYW5raW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5cbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IFRvdXJuYW1lbnQgPSByZXF1aXJlKCcuLi8uLi9zY2hlbWFzL3RvdXJuYW1lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IChyb3V0ZXIpID0+IHtcbiAgICByb3V0ZXIuZ2V0KCcvcmFua2luZy86a2V5JywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIFRvdXJuYW1lbnQuZmluZE9uZSh7IGtleTogcmVxLnBhcmFtcy5rZXkgfSwgKGVyciwgdG91cm5hbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVzLnNlbmQoNTAzKTtcbiAgICAgICAgICAgIGxldCByYW5rZWRJbWFnZXMgPSB0b3VybmFtZW50LmltYWdlcy5tYXAoKGltZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbWcuaWQsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaW1nLnVybCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IGltZy5zY29yZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJhbmtlZEltYWdlcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0b3VybmFtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b3VybmFtZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHJhbmtlZEltYWdlczogcmFua2VkSW1hZ2VzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b3VybmFtZW50LnRpdGxlICsgJyAtICcgKyB0b3VybmFtZW50LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcy5yZW5kZXJWdWUoJ3JhbmtpbmcvcmFua2luZycsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iXX0=
