// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'Hello World'
        };
        const vueOptions = {
            head: {
                title: 'Image Ranker - rank things two at a time'
            }
        };
        res.renderVue('main/main', data, vueOptions);
    });
};
