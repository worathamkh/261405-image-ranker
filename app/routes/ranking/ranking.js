// 

const mongoose = require('mongoose');
const Tournament = require('../../schemas/tournament');

module.exports.default = (router) => {
    router.get('/ranking/:key', (req, res) => {
        Tournament.findOne({ key: req.params.key }, (err, tournament) => {
            if (err) res.send(503);
            const data = {
                // csrfToken: req.csrfToken()
                title: tournament.title,
                description: tournament.description,
                images: tournament.images.map((img) => img.url)
            };
            const vueOptions = {
                head: {
                    title: tournament.title + ' - ' + tournament.description
                }
            };
            res.renderVue('tournament/tournament', data, vueOptions);
        });
    });
    // router.post('/create', upload.array('images', 32), (req, res) => {
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
