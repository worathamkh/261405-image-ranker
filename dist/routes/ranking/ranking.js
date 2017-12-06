// 

const mongoose = require('mongoose');
const Tournament = require('../../schemas/tournament');

module.exports.default = (router) => {
    router.get('/ranking/:key', (req, res) => {
        Tournament.findOne({ key: req.params.key }, (err, tournament) => {
            if (err) res.send(503);
            let rankedImages = tournament.images.map((img) => {
                return {
                    id: img.id,
                    url: img.url,
                    score: img.score
                };
            });
            rankedImages.sort((a, b) => b.score - a.score);
            const data = {
                title: tournament.title,
                description: tournament.description,
                rankedImages: rankedImages
            };
            const vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('ranking/ranking', data, vueOptions);
        });
    });
};
