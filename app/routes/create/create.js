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
            title: 'Hello World'
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };
        res.renderVue('create/create', data, vueOptions);
    });
    router.post('/create', upload.array('images', 32), (req, res) => {
        generateAnimal('pascal').then((animal) => {
            let tournament = new Tournament({
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
            });
            tournament.save((err) => {
                if (err) res.send({ success: false });
                res.send({ success: true });
            });
        });
        // const data = {
        //     title: 'Hello World',
        //     message: 'POST',
        //     body: req.body
        // };
        // const vueOptions = {
        //     head: {
        //         title: 'Post example'
        //     }
        // };
        // res.renderVue('post/post', data, vueOptions);
    });
};
