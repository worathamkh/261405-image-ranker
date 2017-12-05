// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'Hello World'
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };
        res.renderVue('main/main', data, vueOptions);
    });
};