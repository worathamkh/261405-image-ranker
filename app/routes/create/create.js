// 

const mongoose = require('mongoose');
const generateAnimal = require('adjective-adjective-animal');
const Tournament = require('../../schemas/tournament');
const multer = require('multer');
const upload = multer({
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
const imgur = require('imgur');
imgur.setClientId('bdde65a9609e733');
imgur.setAPIUrl('https://api.imgur.com/3/');

module.exports.default = (router) => {
    router.get('/create', (req, res) => {
        const data = {
            csrfToken: req.csrfToken()
        };
        const vueOptions = {
            head: {
                title: 'Create new tournament'
            }
        };
        res.renderVue('create/create', data, vueOptions);
    });
    router.post('/create', upload.array('images', 32), (req, res) => {
        generateAnimal('pascal').then((animal) => {
            imgur.uploadImages(req.files.map((img) => img.path), 'File' /*, albumId */)
                .then((images) => {
                    let data = {
                        key: animal,
                        title: req.body.title,
                        description: req.body.description,
                        images: images.map((img) => {
                            return {
                                id: img.id,
                                url: img.link,
                                score: 0
                            };
                        }),
                        history: []
                    };
                    let tournament = new Tournament(data);
                    tournament.save((err, product) => {
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
                })
                .catch((err) => {
                    console.error(err.message);
                    res.send(503);
                });
        });
    });
};
