'use strict';

// 

var mongoose = require('mongoose');
var generateAnimal = require('adjective-adjective-animal');
var Tournament = require('../../schemas/tournament');
var multer = require('multer');
var upload = multer({
    dest: '/tmp/uploads/'
    // storage: multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, '/tmp/uploads')
    //     },
    //     filename: function (req, file, cb) {
    //         cb(null, file.fieldname + '-' + Date.now())
    //     }
    // })
});
var imgur = require('imgur');
imgur.setClientId('bdde65a9609e733');
imgur.setAPIUrl('https://api.imgur.com/3/');

module.exports.default = function (router) {
    router.get('/create', function (req, res) {
        var data = {
            csrfToken: req.csrfToken()
        };
        var vueOptions = {
            head: {
                title: 'Create new tournament'
            }
        };
        res.renderVue('create/create', data, vueOptions);
    });
    router.post('/create', upload.array('images', 32), function (req, res) {
        generateAnimal('pascal').then(function (animal) {
            imgur.uploadImages(req.files.map(function (img) {
                return img.path;
            }), 'File' /*, albumId */).then(function (images) {
                var data = {
                    key: animal,
                    title: req.body.title,
                    description: req.body.description,
                    images: images.map(function (img) {
                        return {
                            id: img.id,
                            url: img.link,
                            score: 0
                        };
                    }),
                    history: []
                };
                var tournament = new Tournament(data);
                tournament.save(function (err, product) {
                    if (err) res.send(503);
                    res.redirect('/tournament/' + animal);

                    // const data = {
                    //     title: 'Hello World',
                    //     message: 'POST',
                    //     body: req.body
                    // };
                    // const vueOptions = {
                    //     head: {
                    //         title: 'Tournament created'
                    //     }
                    // };
                    // res.renderVue('post/post', data, vueOptions);
                });
            }).catch(function (err) {
                console.error(err.message);
                res.send(503);
            });
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jcmVhdGUvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImdlbmVyYXRlQW5pbWFsIiwiVG91cm5hbWVudCIsIm11bHRlciIsInVwbG9hZCIsImRlc3QiLCJpbWd1ciIsInNldENsaWVudElkIiwic2V0QVBJVXJsIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwiY3NyZlRva2VuIiwidnVlT3B0aW9ucyIsImhlYWQiLCJ0aXRsZSIsInJlbmRlclZ1ZSIsInBvc3QiLCJhcnJheSIsInRoZW4iLCJhbmltYWwiLCJ1cGxvYWRJbWFnZXMiLCJmaWxlcyIsIm1hcCIsImltZyIsInBhdGgiLCJpbWFnZXMiLCJrZXkiLCJib2R5IiwiZGVzY3JpcHRpb24iLCJpZCIsInVybCIsImxpbmsiLCJzY29yZSIsImhpc3RvcnkiLCJ0b3VybmFtZW50Iiwic2F2ZSIsImVyciIsInByb2R1Y3QiLCJzZW5kIiwicmVkaXJlY3QiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsaUJBQWlCRCxRQUFRLDRCQUFSLENBQXZCO0FBQ0EsSUFBTUUsYUFBYUYsUUFBUSwwQkFBUixDQUFuQjtBQUNBLElBQU1HLFNBQVNILFFBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUksU0FBU0QsT0FBTztBQUNsQkUsVUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUa0IsQ0FBUCxDQUFmO0FBV0EsSUFBTUMsUUFBUU4sUUFBUSxPQUFSLENBQWQ7QUFDQU0sTUFBTUMsV0FBTixDQUFrQixpQkFBbEI7QUFDQUQsTUFBTUUsU0FBTixDQUFnQiwwQkFBaEI7O0FBRUFDLE9BQU9DLE9BQVAsQ0FBZUMsT0FBZixHQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDakNBLFdBQU9DLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2hDLFlBQU1DLE9BQU87QUFDVEMsdUJBQVdILElBQUlHLFNBQUo7QUFERixTQUFiO0FBR0EsWUFBTUMsYUFBYTtBQUNmQyxrQkFBTTtBQUNGQyx1QkFBTztBQURMO0FBRFMsU0FBbkI7QUFLQUwsWUFBSU0sU0FBSixDQUFjLGVBQWQsRUFBK0JMLElBQS9CLEVBQXFDRSxVQUFyQztBQUNILEtBVkQ7QUFXQU4sV0FBT1UsSUFBUCxDQUFZLFNBQVosRUFBdUJsQixPQUFPbUIsS0FBUCxDQUFhLFFBQWIsRUFBdUIsRUFBdkIsQ0FBdkIsRUFBbUQsVUFBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0RkLHVCQUFlLFFBQWYsRUFBeUJ1QixJQUF6QixDQUE4QixVQUFDQyxNQUFELEVBQVk7QUFDdENuQixrQkFBTW9CLFlBQU4sQ0FBbUJaLElBQUlhLEtBQUosQ0FBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0EsSUFBSUMsSUFBYjtBQUFBLGFBQWQsQ0FBbkIsRUFBcUQsTUFBckQsQ0FBNEQsY0FBNUQsRUFDS04sSUFETCxDQUNVLFVBQUNPLE1BQUQsRUFBWTtBQUNkLG9CQUFJZixPQUFPO0FBQ1BnQix5QkFBS1AsTUFERTtBQUVQTCwyQkFBT04sSUFBSW1CLElBQUosQ0FBU2IsS0FGVDtBQUdQYyxpQ0FBYXBCLElBQUltQixJQUFKLENBQVNDLFdBSGY7QUFJUEgsNEJBQVFBLE9BQU9ILEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQVM7QUFDeEIsK0JBQU87QUFDSE0sZ0NBQUlOLElBQUlNLEVBREw7QUFFSEMsaUNBQUtQLElBQUlRLElBRk47QUFHSEMsbUNBQU87QUFISix5QkFBUDtBQUtILHFCQU5PLENBSkQ7QUFXUEMsNkJBQVM7QUFYRixpQkFBWDtBQWFBLG9CQUFJQyxhQUFhLElBQUl0QyxVQUFKLENBQWVjLElBQWYsQ0FBakI7QUFDQXdCLDJCQUFXQyxJQUFYLENBQWdCLFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUM5Qix3QkFBSUQsR0FBSixFQUFTM0IsSUFBSTZCLElBQUosQ0FBUyxHQUFUO0FBQ1Q3Qix3QkFBSThCLFFBQUosQ0FBYSxpQkFBaUJwQixNQUE5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsaUJBZkQ7QUFnQkgsYUFoQ0wsRUFpQ0txQixLQWpDTCxDQWlDVyxVQUFDSixHQUFELEVBQVM7QUFDWkssd0JBQVFDLEtBQVIsQ0FBY04sSUFBSU8sT0FBbEI7QUFDQWxDLG9CQUFJNkIsSUFBSixDQUFTLEdBQVQ7QUFDSCxhQXBDTDtBQXFDSCxTQXRDRDtBQXVDSCxLQXhDRDtBQXlDSCxDQXJERCIsImZpbGUiOiJyb3V0ZXMvY3JlYXRlL2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFxuXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCBnZW5lcmF0ZUFuaW1hbCA9IHJlcXVpcmUoJ2FkamVjdGl2ZS1hZGplY3RpdmUtYW5pbWFsJyk7XG5jb25zdCBUb3VybmFtZW50ID0gcmVxdWlyZSgnLi4vLi4vc2NoZW1hcy90b3VybmFtZW50Jyk7XG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTtcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7XG4gICAgZGVzdDogJy90bXAvdXBsb2Fkcy8nXG4gICAgLy8gc3RvcmFnZTogbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICAvLyAgICAgZGVzdGluYXRpb246IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4gICAgLy8gICAgICAgICBjYihudWxsLCAnL3RtcC91cGxvYWRzJylcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZmlsZW5hbWU6IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4gICAgLy8gICAgICAgICBjYihudWxsLCBmaWxlLmZpZWxkbmFtZSArICctJyArIERhdGUubm93KCkpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxufSk7XG5jb25zdCBpbWd1ciA9IHJlcXVpcmUoJ2ltZ3VyJyk7XG5pbWd1ci5zZXRDbGllbnRJZCgnYmRkZTY1YTk2MDllNzMzJyk7XG5pbWd1ci5zZXRBUElVcmwoJ2h0dHBzOi8vYXBpLmltZ3VyLmNvbS8zLycpO1xuXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gKHJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5nZXQoJy9jcmVhdGUnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGNzcmZUb2tlbjogcmVxLmNzcmZUb2tlbigpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZ1ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgbmV3IHRvdXJuYW1lbnQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlcy5yZW5kZXJWdWUoJ2NyZWF0ZS9jcmVhdGUnLCBkYXRhLCB2dWVPcHRpb25zKTtcbiAgICB9KTtcbiAgICByb3V0ZXIucG9zdCgnL2NyZWF0ZScsIHVwbG9hZC5hcnJheSgnaW1hZ2VzJywgMzIpLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgZ2VuZXJhdGVBbmltYWwoJ3Bhc2NhbCcpLnRoZW4oKGFuaW1hbCkgPT4ge1xuICAgICAgICAgICAgaW1ndXIudXBsb2FkSW1hZ2VzKHJlcS5maWxlcy5tYXAoKGltZykgPT4gaW1nLnBhdGgpLCAnRmlsZScgLyosIGFsYnVtSWQgKi8pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGltYWdlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYW5pbWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcS5ib2R5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBpbWFnZXMubWFwKChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaW1nLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGltZy5saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3VybmFtZW50ID0gbmV3IFRvdXJuYW1lbnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuc2F2ZSgoZXJyLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvdG91cm5hbWVudC8nICsgYW5pbWFsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogcmVxLmJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB2dWVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6ICdUb3VybmFtZW50IGNyZWF0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5yZW5kZXJWdWUoJ3Bvc3QvcG9zdCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iXX0=
