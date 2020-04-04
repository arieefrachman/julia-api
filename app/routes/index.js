`use strict`;

const fs = require('fs');
const path = require('path');

module.exports = (fastify) => {

    fs.readdirSync('./app/routes').forEach((dir) => {
        if (!~dir.indexOf('.js')){
            fs.readdirSync(`./app/routes/${dir}`).forEach(file => {
                let extname = path.extname(file);
                let basename = path.basename(file, extname);
                if (~file.indexOf('.js') && basename !== 'index') {
                    fastify.register(require(`./${dir}/${basename}`), {prefix: `/${dir}/${basename}`});
                }
            })
        }
    });
};
