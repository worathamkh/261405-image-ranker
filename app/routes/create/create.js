// 

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
};
