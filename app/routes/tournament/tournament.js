// 

const mongoose = require('mongoose');
const Tournament = require('../../schemas/tournament');
const EloRank = require('elo-rank');
let elo = new EloRank(16);

module.exports.default = (router) => {
    // router.post('/create', upload.array('images', 32), (req, res) => {
    router.get('/tournament/:key', (req, res) => {
        Tournament.findOne({ key: req.params.key }, (err, tournament) => {
            if (err) res.send(503);
            const len = tournament.images.length;
            let leftId = Math.floor(Math.random() * len);
            let rightId = Math.floor(Math.random() * len);
            while (len > 0 && leftId === rightId) {
                rightId = Math.floor(Math.random() * len);
            }
            const data = {
                // csrfToken: req.csrfToken()
                key: req.params.key,
                title: tournament.title,
                description: tournament.description,
                left: tournament.images[leftId],
                right: tournament.images[rightId]
            };
            const vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('tournament/tournament', data, vueOptions);
        });
    });
    router.get('/tournament/:key/:winner/:loser', (req, res) => {
        Tournament.findOne({ key: req.params.key }, (err, tournament) => {
            if (err) res.send(503);
            if (tournament == null) res.json({ error: 'cannot find given key' });
            else {
                let winnerId = tournament.images.findIndex((img) => img.id === req.params.winner);
                let loserId = tournament.images.findIndex((img) => img.id === req.params.loser);
                let winnerOldScore = tournament.images[winnerId].score;
                let loserOldScore = tournament.images[loserId].score
                let winnerExpectedScore = elo.getExpected(winnerOldScore, loserOldScore);
                let loserExpectedScore = elo.getExpected(loserOldScore, winnerOldScore);
                let winnerNewScore = elo.updateRating(winnerExpectedScore, 1, winnerOldScore);
                let loserNewScore = elo.updateRating(loserExpectedScore, 0, loserOldScore);
                tournament.images[winnerId].score = winnerNewScore;
                tournament.images[loserId].score = loserNewScore;
                let historyCount = tournament.history.length;
                tournament.history.push({
                    id: historyCount + 1,
                    winner: req.params.winner,
                    loser: req.params.loser
                });
                tournament.save((err, product) => {
                    if (err) res.send(503);
                    res.redirect('/tournament/' + req.params.key);
                });
            }
        });
    });
};
