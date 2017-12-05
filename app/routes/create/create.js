// 

const mongoose = require('mongoose');
const generateAnimal = require('adjective-adjective-animal');
const Tournament = require('../../schemas/tournament');
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage()
});

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
            let data = {
                key: animal,
                title: req.body.title,
                description: req.body.description,
                images: req.files.map((img) => {
                    return {
                        url: img.originalname,
                        score: 0
                    };
                }),
                history: []
            };
            console.log(JSON.stringify(data));
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
        });
    });
};
