'use strict';

// 

var mongoose = require('mongoose');
var Tournament = require('../../schemas/tournament');
var EloRank = require('elo-rank');
var elo = new EloRank(16);

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
                key: req.params.key,
                title: tournament.title,
                description: tournament.description,
                left: tournament.images[leftId],
                right: tournament.images[rightId]
            };
            var vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('tournament/tournament', data, vueOptions);
        });
    });
    router.get('/tournament/:key/:winner/:loser', function (req, res) {
        Tournament.findOne({ key: req.params.key }, function (err, tournament) {
            if (err) res.send(503);
            if (tournament == null) res.json({ error: 'cannot find given key' });else {
                console.log(tournament);
                var winnerId = tournament.images.findIndex(function (img) {
                    return img.id === req.params.winner;
                });
                var loserId = tournament.images.findIndex(function (img) {
                    return img.id === req.params.loser;
                });
                var winnerOldScore = tournament.images[winnerId].score;
                var loserOldScore = tournament.images[loserId].score;
                var winnerExpectedScore = elo.getExpected(winnerOldScore, loserOldScore);
                var loserExpectedScore = elo.getExpected(loserOldScore, winnerOldScore);
                var winnerNewScore = elo.updateRating(winnerExpectedScore, 1, winnerOldScore);
                var loserNewScore = elo.updateRating(loserExpectedScore, 0, loserOldScore);
                tournament.images[winnerId].score = winnerNewScore;
                tournament.images[loserId].score = loserNewScore;
                var historyCount = tournament.history.length;
                tournament.history.push({
                    id: historyCount + 1,
                    winner: req.params.winner,
                    loser: req.params.loser
                });
                tournament.save(function (err, product) {
                    if (err) res.send(503);
                    res.redirect('/tournament/' + req.params.key);
                });
            }
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b3VybmFtZW50L3RvdXJuYW1lbnQuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVG91cm5hbWVudCIsIkVsb1JhbmsiLCJlbG8iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsInJvdXRlciIsImdldCIsInJlcSIsInJlcyIsImZpbmRPbmUiLCJrZXkiLCJwYXJhbXMiLCJlcnIiLCJ0b3VybmFtZW50Iiwic2VuZCIsImxlbiIsImltYWdlcyIsImxlbmd0aCIsImxlZnRJZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJpZ2h0SWQiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxlZnQiLCJyaWdodCIsInZ1ZU9wdGlvbnMiLCJoZWFkIiwicmVuZGVyVnVlIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpbm5lcklkIiwiZmluZEluZGV4IiwiaW1nIiwiaWQiLCJ3aW5uZXIiLCJsb3NlcklkIiwibG9zZXIiLCJ3aW5uZXJPbGRTY29yZSIsInNjb3JlIiwibG9zZXJPbGRTY29yZSIsIndpbm5lckV4cGVjdGVkU2NvcmUiLCJnZXRFeHBlY3RlZCIsImxvc2VyRXhwZWN0ZWRTY29yZSIsIndpbm5lck5ld1Njb3JlIiwidXBkYXRlUmF0aW5nIiwibG9zZXJOZXdTY29yZSIsImhpc3RvcnlDb3VudCIsImhpc3RvcnkiLCJwdXNoIiwic2F2ZSIsInByb2R1Y3QiLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxhQUFhRCxRQUFRLDBCQUFSLENBQW5CO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUSxVQUFSLENBQWhCO0FBQ0EsSUFBSUcsTUFBTSxJQUFJRCxPQUFKLENBQVksRUFBWixDQUFWOztBQUVBRSxPQUFPQyxPQUFQLENBQWVDLE9BQWYsR0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pDO0FBQ0FBLFdBQU9DLEdB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QXFDLENBQXJDLEVBQXdDSCxhQUF4QyxDQUFwQjtBQUNBL0IsMkJBQVdHLE1BQVgsQ0FBa0JtQixRQUFsQixFQUE0QlEsS0FBNUIsR0FBb0NLLGNBQXBDO0FBQ0FuQywyQkFBV0csTUFBWCxDQUFrQndCLE9BQWxCLEVBQTJCRyxLQUEzQixHQUFtQ08sYUFBbkM7QUFDQSxvQkFBSUMsZUFBZXRDLFdBQVd1QyxPQUFYLENBQW1CbkMsTUFBdEM7QUFDQUosMkJBQVd1QyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QjtBQUNwQmYsd0JBQUlhLGVBQWUsQ0FEQztBQUVwQlosNEJBQVFoQyxJQUFJSSxNQUFKLENBQVc0QixNQUZDO0FBR3BCRSwyQkFBT2xDLElBQUlJLE1BQUosQ0FBVzhCO0FBSEUsaUJBQXhCO0FBS0E1QiwyQkFBV3lDLElBQVgsQ0FBZ0IsVUFBQzFDLEdBQUQsRUFBTTJDLE9BQU4sRUFBa0I7QUFDOUIsd0JBQUkzQyxHQUFKLEVBQVNKLElBQUlNLElBQUosQ0FBUyxHQUFUO0FBQ1ROLHdCQUFJZ0QsUUFBSixDQUFhLGlCQUFpQmpELElBQUlJLE1BQUosQ0FBV0QsR0FBekM7QUFDSCxpQkFIRDtBQUlIO0FBQ0osU0ExQkQ7QUEyQkgsS0E1QkQ7QUE2QkgsQ0F4REQiLCJmaWxlIjoicm91dGVzL3RvdXJuYW1lbnQvdG91cm5hbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFxuXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCBUb3VybmFtZW50ID0gcmVxdWlyZSgnLi4vLi4vc2NoZW1hcy90b3VybmFtZW50Jyk7XG5jb25zdCBFbG9SYW5rID0gcmVxdWlyZSgnZWxvLXJhbmsnKTtcbmxldCBlbG8gPSBuZXcgRWxvUmFuaygxNik7XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSAocm91dGVyKSA9PiB7XG4gICAgLy8gcm91dGVyLnBvc3QoJy9jcmVhdGUnLCB1cGxvYWQuYXJyYXkoJ2ltYWdlcycsIDMyKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcm91dGVyLmdldCgnL3RvdXJuYW1lbnQvOmtleScsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBUb3VybmFtZW50LmZpbmRPbmUoeyBrZXk6IHJlcS5wYXJhbXMua2V5IH0sIChlcnIsIHRvdXJuYW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zZW5kKDUwMyk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSB0b3VybmFtZW50LmltYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgbGVmdElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgICAgIGxldCByaWdodElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgICAgIHdoaWxlIChsZW4gPiAwICYmIGxlZnRJZCA9PT0gcmlnaHRJZCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAvLyBjc3JmVG9rZW46IHJlcS5jc3JmVG9rZW4oKVxuICAgICAgICAgICAgICAgIGtleTogcmVxLnBhcmFtcy5rZXksXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvdXJuYW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvdXJuYW1lbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbGVmdDogdG91cm5hbWVudC5pbWFnZXNbbGVmdElkXSxcbiAgICAgICAgICAgICAgICByaWdodDogdG91cm5hbWVudC5pbWFnZXNbcmlnaHRJZF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB2dWVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRvdXJuYW1lbnQudGl0bGUgKyAnIC0gJyArIHRvdXJuYW1lbnQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzLnJlbmRlclZ1ZSgndG91cm5hbWVudC90b3VybmFtZW50JywgZGF0YSwgdnVlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJvdXRlci5nZXQoJy90b3VybmFtZW50LzprZXkvOndpbm5lci86bG9zZXInLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgVG91cm5hbWVudC5maW5kT25lKHsga2V5OiByZXEucGFyYW1zLmtleSB9LCAoZXJyLCB0b3VybmFtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgaWYgKHRvdXJuYW1lbnQgPT0gbnVsbCkgcmVzLmpzb24oeyBlcnJvcjogJ2Nhbm5vdCBmaW5kIGdpdmVuIGtleScgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b3VybmFtZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgd2lubmVySWQgPSB0b3VybmFtZW50LmltYWdlcy5maW5kSW5kZXgoKGltZykgPT4gaW1nLmlkID09PSByZXEucGFyYW1zLndpbm5lcik7XG4gICAgICAgICAgICAgICAgbGV0IGxvc2VySWQgPSB0b3VybmFtZW50LmltYWdlcy5maW5kSW5kZXgoKGltZykgPT4gaW1nLmlkID09PSByZXEucGFyYW1zLmxvc2VyKTtcbiAgICAgICAgICAgICAgICBsZXQgd2lubmVyT2xkU2NvcmUgPSB0b3VybmFtZW50LmltYWdlc1t3aW5uZXJJZF0uc2NvcmU7XG4gICAgICAgICAgICAgICAgbGV0IGxvc2VyT2xkU2NvcmUgPSB0b3VybmFtZW50LmltYWdlc1tsb3NlcklkXS5zY29yZVxuICAgICAgICAgICAgICAgIGxldCB3aW5uZXJFeHBlY3RlZFNjb3JlID0gZWxvLmdldEV4cGVjdGVkKHdpbm5lck9sZFNjb3JlLCBsb3Nlck9sZFNjb3JlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9zZXJFeHBlY3RlZFNjb3JlID0gZWxvLmdldEV4cGVjdGVkKGxvc2VyT2xkU2NvcmUsIHdpbm5lck9sZFNjb3JlKTtcbiAgICAgICAgICAgICAgICBsZXQgd2lubmVyTmV3U2NvcmUgPSBlbG8udXBkYXRlUmF0aW5nKHdpbm5lckV4cGVjdGVkU2NvcmUsIDEsIHdpbm5lck9sZFNjb3JlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9zZXJOZXdTY29yZSA9IGVsby51cGRhdGVSYXRpbmcobG9zZXJFeHBlY3RlZFNjb3JlLCAwLCBsb3Nlck9sZFNjb3JlKTtcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50LmltYWdlc1t3aW5uZXJJZF0uc2NvcmUgPSB3aW5uZXJOZXdTY29yZTtcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50LmltYWdlc1tsb3NlcklkXS5zY29yZSA9IGxvc2VyTmV3U2NvcmU7XG4gICAgICAgICAgICAgICAgbGV0IGhpc3RvcnlDb3VudCA9IHRvdXJuYW1lbnQuaGlzdG9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdG91cm5hbWVudC5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogaGlzdG9yeUNvdW50ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgd2lubmVyOiByZXEucGFyYW1zLndpbm5lcixcbiAgICAgICAgICAgICAgICAgICAgbG9zZXI6IHJlcS5wYXJhbXMubG9zZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50LnNhdmUoKGVyciwgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXMuc2VuZCg1MDMpO1xuICAgICAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoJy90b3VybmFtZW50LycgKyByZXEucGFyYW1zLmtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbiJdfQ==
