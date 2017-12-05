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
                    if (err) res.json({ success: false });
                    res.json({ success: true, object: product });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jcmVhdGUvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImdlbmVyYXRlQW5pbWFsIiwiVG91cm5hbWVudCIsIm11bHRlciIsInVwbG9hZCIsImRlc3QiLCJpbWd1ciIsInNldENsaWVudElkIiwic2V0QVBJVXJsIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwiY3NyZlRva2VuIiwidnVlT3B0aW9ucyIsImhlYWQiLCJ0aXRsZSIsInJlbmRlclZ1ZSIsInBvc3QiLCJhcnJheSIsInRoZW4iLCJhbmltYWwiLCJ1cGxvYWRJbWFnZXMiLCJmaWxlcyIsIm1hcCIsImltZyIsInBhdGgiLCJpbWFnZXMiLCJrZXkiLCJib2R5IiwiZGVzY3JpcHRpb24iLCJpZCIsInVybCIsImxpbmsiLCJzY29yZSIsImhpc3RvcnkiLCJ0b3VybmFtZW50Iiwic2F2ZSIsImVyciIsInByb2R1Y3QiLCJqc29uIiwic3VjY2VzcyIsIm9iamVjdCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInNlbmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsaUJBQWlCRCxRQUFRLDRCQUFSLENBQXZCO0FBQ0EsSUFBTUUsYUFBYUYsUUFBUSwwQkFBUixDQUFuQjtBQUNBLElBQU1HLFNBQVNILFFBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUksU0FBU0QsT0FBTztBQUNsQkUsVUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUa0IsQ0FBUCxDQUFmO0FBV0EsSUFBTUMsUUFBUU4sUUFBUSxPQUFSLENBQWQ7QUFDQU0sTUFBTUMsV0FBTixDQUFrQixpQkFBbEI7QUFDQUQsTUFBTUUsU0FBTixDQUFnQiwwQkFBaEI7O0FBRUFDLE9BQU9DLE9BQVAsQ0FBZUMsT0FBZixHQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDakNBLFdBQU9DLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2hDLFlBQU1DLE9BQU87QUFDVEMsdUJBQVdILElBQUlHLFNBQUo7QUFERixTQUFiO0FBR0EsWUFBTUMsYUFBYTtBQUNmQyxrQkFBTTtBQUNGQyx1QkFBTztBQURMO0FBRFMsU0FBbkI7QUFLQUwsWUFBSU0sU0FBSixDQUFjLGVBQWQsRUFBK0JMLElBQS9CLEVBQXFDRSxVQUFyQztBQUNILEtBVkQ7QUFXQU4sV0FBT1UsSUFBUCxDQUFZLFNBQVosRUFBdUJsQixPQUFPbUIsS0FBUCxDQUFhLFFBQWIsRUFBdUIsRUFBdkIsQ0FBdkIsRUFBbUQsVUFBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0RkLHVCQUFlLFFBQWYsRUFBeUJ1QixJQUF6QixDQUE4QixVQUFDQyxNQUFELEVBQVk7QUFDdENuQixrQkFBTW9CLFlBQU4sQ0FBbUJaLElBQUlhLEtBQUosQ0FBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0EsSUFBSUMsSUFBYjtBQUFBLGFBQWQsQ0FBbkIsRUFBcUQsTUFBckQsQ0FBNEQsY0FBNUQsRUFDS04sSUFETCxDQUNVLFVBQUNPLE1BQUQsRUFBWTtBQUNkLG9CQUFJZixPQUFPO0FBQ1BnQix5QkFBS1AsTUFERTtBQUVQTCwyQkFBT04sSUFBSW1CLElBQUosQ0FBU2IsS0FGVDtBQUdQYyxpQ0FBYXBCLElBQUltQixJQUFKLENBQVNDLFdBSGY7QUFJUEgsNEJBQVFBLE9BQU9ILEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQVM7QUFDeEIsK0JBQU87QUFDSE0sZ0NBQUlOLElBQUlNLEVBREw7QUFFSEMsaUNBQUtQLElBQUlRLElBRk47QUFHSEMsbUNBQU87QUFISix5QkFBUDtBQUtILHFCQU5PLENBSkQ7QUFXUEMsNkJBQVM7QUFYRixpQkFBWDtBQWFBLG9CQUFJQyxhQUFhLElBQUl0QyxVQUFKLENBQWVjLElBQWYsQ0FBakI7QUFDQXdCLDJCQUFXQyxJQUFYLENBQWdCLFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUM5Qix3QkFBSUQsR0FBSixFQUFTM0IsSUFBSTZCLElBQUosQ0FBUyxFQUFFQyxTQUFTLEtBQVgsRUFBVDtBQUNUOUIsd0JBQUk2QixJQUFKLENBQVMsRUFBRUMsU0FBUyxJQUFYLEVBQWlCQyxRQUFRSCxPQUF6QixFQUFUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxpQkFmRDtBQWdCSCxhQWhDTCxFQWlDS0ksS0FqQ0wsQ0FpQ1csVUFBQ0wsR0FBRCxFQUFTO0FBQ1pNLHdCQUFRQyxLQUFSLENBQWNQLElBQUlRLE9BQWxCO0FBQ0FuQyxvQkFBSW9DLElBQUosQ0FBUyxHQUFUO0FBQ0gsYUFwQ0w7QUFxQ0gsU0F0Q0Q7QUF1Q0gsS0F4Q0Q7QUF5Q0gsQ0FyREQiLCJmaWxlIjoicm91dGVzL2NyZWF0ZS9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcblxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgZ2VuZXJhdGVBbmltYWwgPSByZXF1aXJlKCdhZGplY3RpdmUtYWRqZWN0aXZlLWFuaW1hbCcpO1xuY29uc3QgVG91cm5hbWVudCA9IHJlcXVpcmUoJy4uLy4uL3NjaGVtYXMvdG91cm5hbWVudCcpO1xuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoe1xuICAgIGRlc3Q6ICcvdG1wL3VwbG9hZHMvJ1xuICAgIC8vIHN0b3JhZ2U6IG11bHRlci5kaXNrU3RvcmFnZSh7XG4gICAgLy8gICAgIGRlc3RpbmF0aW9uOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgIC8vICAgICAgICAgY2IobnVsbCwgJy90bXAvdXBsb2FkcycpXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZpbGVuYW1lOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgIC8vICAgICAgICAgY2IobnVsbCwgZmlsZS5maWVsZG5hbWUgKyAnLScgKyBEYXRlLm5vdygpKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbn0pO1xuY29uc3QgaW1ndXIgPSByZXF1aXJlKCdpbWd1cicpO1xuaW1ndXIuc2V0Q2xpZW50SWQoJ2JkZGU2NWE5NjA5ZTczMycpO1xuaW1ndXIuc2V0QVBJVXJsKCdodHRwczovL2FwaS5pbWd1ci5jb20vMy8nKTtcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IChyb3V0ZXIpID0+IHtcbiAgICByb3V0ZXIuZ2V0KCcvY3JlYXRlJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjc3JmVG9rZW46IHJlcS5jc3JmVG9rZW4oKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB2dWVPcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIG5ldyB0b3VybmFtZW50J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXMucmVuZGVyVnVlKCdjcmVhdGUvY3JlYXRlJywgZGF0YSwgdnVlT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgcm91dGVyLnBvc3QoJy9jcmVhdGUnLCB1cGxvYWQuYXJyYXkoJ2ltYWdlcycsIDMyKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGdlbmVyYXRlQW5pbWFsKCdwYXNjYWwnKS50aGVuKChhbmltYWwpID0+IHtcbiAgICAgICAgICAgIGltZ3VyLnVwbG9hZEltYWdlcyhyZXEuZmlsZXMubWFwKChpbWcpID0+IGltZy5wYXRoKSwgJ0ZpbGUnIC8qLCBhbGJ1bUlkICovKVxuICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGFuaW1hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXEuYm9keS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLm1hcCgoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGltZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpbWcubGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG91cm5hbWVudCA9IG5ldyBUb3VybmFtZW50KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0b3VybmFtZW50LnNhdmUoKGVyciwgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgb2JqZWN0OiBwcm9kdWN0IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnSGVsbG8gV29ybGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBib2R5OiByZXEuYm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHZ1ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ1RvdXJuYW1lbnQgY3JlYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzLnJlbmRlclZ1ZSgncG9zdC9wb3N0JywgZGF0YSwgdnVlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKDUwMyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbiJdfQ==
