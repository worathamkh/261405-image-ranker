// 

const mongoose = require('mongoose');
const Tournament = require('../../schemas/tournament');

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
                title: tournament.title,
                description: tournament.description,
                left: tournament.images[leftId].url,
                right: tournament.images[rightId].url
            };
            const vueOptions = {
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
