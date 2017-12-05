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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jcmVhdGUvY3JlYXRlLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImdlbmVyYXRlQW5pbWFsIiwiVG91cm5hbWVudCIsIm11bHRlciIsInVwbG9hZCIsImRlc3QiLCJpbWd1ciIsInNldENsaWVudElkIiwic2V0QVBJVXJsIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwiY3NyZlRva2VuIiwidnVlT3B0aW9ucyIsImhlYWQiLCJ0aXRsZSIsInJlbmRlclZ1ZSIsInBvc3QiLCJhcnJheSIsInRoZW4iLCJhbmltYWwiLCJ1cGxvYWRJbWFnZXMiLCJmaWxlcyIsIm1hcCIsImltZyIsInBhdGgiLCJpbWFnZXMiLCJrZXkiLCJib2R5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJsaW5rIiwic2NvcmUiLCJoaXN0b3J5IiwidG91cm5hbWVudCIsInNhdmUiLCJlcnIiLCJwcm9kdWN0IiwianNvbiIsInN1Y2Nlc3MiLCJvYmplY3QiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUNBLElBQU1DLGlCQUFpQkQsUUFBUSw0QkFBUixDQUF2QjtBQUNBLElBQU1FLGFBQWFGLFFBQVEsMEJBQVIsQ0FBbkI7QUFDQSxJQUFNRyxTQUFTSCxRQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1JLFNBQVNELE9BQU87QUFDbEJFLFVBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVGtCLENBQVAsQ0FBZjtBQVdBLElBQU1DLFFBQVFOLFFBQVEsT0FBUixDQUFkO0FBQ0FNLE1BQU1DLFdBQU4sQ0FBa0IsaUJBQWxCO0FBQ0FELE1BQU1FLFNBQU4sQ0FBZ0IsMEJBQWhCOztBQUVBQyxPQUFPQyxPQUFQLENBQWVDLE9BQWYsR0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pDQSxXQUFPQyxHQUFQLENBQVcsU0FBWCxFQUFzQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNoQyxZQUFNQyxPQUFPO0FBQ1RDLHVCQUFXSCxJQUFJRyxTQUFKO0FBREYsU0FBYjtBQUdBLFlBQU1DLGFBQWE7QUFDZkMsa0JBQU07QUFDRkMsdUJBQU87QUFETDtBQURTLFNBQW5CO0FBS0FMLFlBQUlNLFNBQUosQ0FBYyxlQUFkLEVBQStCTCxJQUEvQixFQUFxQ0UsVUFBckM7QUFDSCxLQVZEO0FBV0FOLFdBQU9VLElBQVAsQ0FBWSxTQUFaLEVBQXVCbEIsT0FBT21CLEtBQVAsQ0FBYSxRQUFiLEVBQXVCLEVBQXZCLENBQXZCLEVBQW1ELFVBQUNULEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzdEZCx1QkFBZSxRQUFmLEVBQXlCdUIsSUFBekIsQ0FBOEIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3RDbkIsa0JBQU1vQixZQUFOLENBQW1CWixJQUFJYSxLQUFKLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsdUJBQVNBLElBQUlDLElBQWI7QUFBQSxhQUFkLENBQW5CLEVBQXFELE1BQXJELENBQTRELGNBQTVELEVBQ0tOLElBREwsQ0FDVSxVQUFDTyxNQUFELEVBQVk7QUFDZCxvQkFBSWYsT0FBTztBQUNQZ0IseUJBQUtQLE1BREU7QUFFUEwsMkJBQU9OLElBQUltQixJQUFKLENBQVNiLEtBRlQ7QUFHUGMsaUNBQWFwQixJQUFJbUIsSUFBSixDQUFTQyxXQUhmO0FBSVBILDRCQUFRQSxPQUFPSCxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hCLCtCQUFPO0FBQ0hNLGlDQUFLTixJQUFJTyxJQUROO0FBRUhDLG1DQUFPO0FBRkoseUJBQVA7QUFJSCxxQkFMTyxDQUpEO0FBVVBDLDZCQUFTO0FBVkYsaUJBQVg7QUFZQSxvQkFBSUMsYUFBYSxJQUFJckMsVUFBSixDQUFlYyxJQUFmLENBQWpCO0FBQ0F1QiwyQkFBV0MsSUFBWCxDQUFnQixVQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDOUIsd0JBQUlELEdBQUosRUFBUzFCLElBQUk0QixJQUFKLENBQVMsRUFBRUMsU0FBUyxLQUFYLEVBQVQ7QUFDVDdCLHdCQUFJNEIsSUFBSixDQUFTLEVBQUVDLFNBQVMsSUFBWCxFQUFpQkMsUUFBUUgsT0FBekIsRUFBVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsaUJBZkQ7QUFnQkgsYUEvQkwsRUFnQ0tJLEtBaENMLENBZ0NXLFVBQUNMLEdBQUQsRUFBUztBQUNaTSx3QkFBUUMsS0FBUixDQUFjUCxJQUFJUSxPQUFsQjtBQUNBbEMsb0JBQUltQyxJQUFKLENBQVMsR0FBVDtBQUNILGFBbkNMO0FBb0NILFNBckNEO0FBc0NILEtBdkNEO0FBd0NILENBcEREIiwiZmlsZSI6InJvdXRlcy9jcmVhdGUvY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5cbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IGdlbmVyYXRlQW5pbWFsID0gcmVxdWlyZSgnYWRqZWN0aXZlLWFkamVjdGl2ZS1hbmltYWwnKTtcbmNvbnN0IFRvdXJuYW1lbnQgPSByZXF1aXJlKCcuLi8uLi9zY2hlbWFzL3RvdXJuYW1lbnQnKTtcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKHtcbiAgICBkZXN0OiAnL3RtcC91cGxvYWRzLydcbiAgICAvLyBzdG9yYWdlOiBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICAgIC8vICAgICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAvLyAgICAgICAgIGNiKG51bGwsICcvdG1wL3VwbG9hZHMnKVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAvLyAgICAgICAgIGNiKG51bGwsIGZpbGUuZmllbGRuYW1lICsgJy0nICsgRGF0ZS5ub3coKSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG59KTtcbmNvbnN0IGltZ3VyID0gcmVxdWlyZSgnaW1ndXInKTtcbmltZ3VyLnNldENsaWVudElkKCdiZGRlNjVhOTYwOWU3MzMnKTtcbmltZ3VyLnNldEFQSVVybCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvJyk7XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSAocm91dGVyKSA9PiB7XG4gICAgcm91dGVyLmdldCgnL2NyZWF0ZScsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY3NyZlRva2VuOiByZXEuY3NyZlRva2VuKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSBuZXcgdG91cm5hbWVudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnJlbmRlclZ1ZSgnY3JlYXRlL2NyZWF0ZScsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJvdXRlci5wb3N0KCcvY3JlYXRlJywgdXBsb2FkLmFycmF5KCdpbWFnZXMnLCAzMiksIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBnZW5lcmF0ZUFuaW1hbCgncGFzY2FsJykudGhlbigoYW5pbWFsKSA9PiB7XG4gICAgICAgICAgICBpbWd1ci51cGxvYWRJbWFnZXMocmVxLmZpbGVzLm1hcCgoaW1nKSA9PiBpbWcucGF0aCksICdGaWxlJyAvKiwgYWxidW1JZCAqLylcbiAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBhbmltYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVxLmJvZHkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaW1nLmxpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeTogW11cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdXJuYW1lbnQgPSBuZXcgVG91cm5hbWVudChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdG91cm5hbWVudC5zYXZlKChlcnIsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG9iamVjdDogcHJvZHVjdCB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogcmVxLmJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB2dWVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6ICdUb3VybmFtZW50IGNyZWF0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5yZW5kZXJWdWUoJ3Bvc3QvcG9zdCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iXX0=
