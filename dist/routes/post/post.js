'use strict';

module.exports.default = function (router) {
    router.get('/post', function (req, res) {
        var data = {
            title: 'Hello World',
            message: 'GET',
            csrfToken: req.csrfToken()
        };
        var vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('post/post', data, vueOptions);
    });

    router.post('/post', function (req, res) {
        var data = {
            title: 'Hello World',
            message: 'POST',
            body: req.body
        };
        var vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('post/post', data, vueOptions);
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwidGl0bGUiLCJtZXNzYWdlIiwiY3NyZlRva2VuIiwidnVlT3B0aW9ucyIsImhlYWQiLCJyZW5kZXJWdWUiLCJwb3N0IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQ0EsV0FBT0MsR0FBUCxDQUFXLE9BQVgsRUFBb0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDOUIsWUFBTUMsT0FBTztBQUNUQyxtQkFBTyxhQURFO0FBRVRDLHFCQUFTLEtBRkE7QUFHVEMsdUJBQVdMLElBQUlLLFNBQUo7QUFIRixTQUFiO0FBS0EsWUFBTUMsYUFBYTtBQUNmQyxrQkFBTTtBQUNGSix1QkFBTztBQURMO0FBRFMsU0FBbkI7QUFLQUYsWUFBSU8sU0FBSixDQUFjLFdBQWQsRUFBMkJOLElBQTNCLEVBQWlDSSxVQUFqQztBQUNILEtBWkQ7O0FBY0FSLFdBQU9XLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFVBQUNULEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQy9CLFlBQU1DLE9BQU87QUFDVEMsbUJBQU8sYUFERTtBQUVUQyxxQkFBUyxNQUZBO0FBR1RNLGtCQUFNVixJQUFJVTtBQUhELFNBQWI7QUFLQSxZQUFNSixhQUFhO0FBQ2ZDLGtCQUFNO0FBQ0ZKLHVCQUFPO0FBREw7QUFEUyxTQUFuQjtBQUtBRixZQUFJTyxTQUFKLENBQWMsV0FBZCxFQUEyQk4sSUFBM0IsRUFBaUNJLFVBQWpDO0FBQ0gsS0FaRDtBQWFILENBNUJEIiwiZmlsZSI6InJvdXRlcy9wb3N0L3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gKHJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5nZXQoJy9wb3N0JywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdHRVQnLFxuICAgICAgICAgICAgY3NyZlRva2VuOiByZXEuY3NyZlRva2VuKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Bvc3QgZXhhbXBsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnJlbmRlclZ1ZSgncG9zdC9wb3N0JywgZGF0YSwgdnVlT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICByb3V0ZXIucG9zdCgnL3Bvc3QnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsbG8gV29ybGQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogcmVxLmJvZHlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdnVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Bvc3QgZXhhbXBsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnJlbmRlclZ1ZSgncG9zdC9wb3N0JywgZGF0YSwgdnVlT3B0aW9ucyk7XG4gICAgfSk7XG59O1xuIl19
