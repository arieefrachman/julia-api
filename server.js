'use strict';

const fastify = require('fastify')({
    log: true
});
require('dotenv').config();
const {errorHandler} = require('./app/utils/utils');
const process = require('process');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// registering routes
require('./app/routes/index')(fastify);

fastify.addHook("onError", async (request, reply, error) => {
    errorHandler(request, reply, error)
});

fastify.listen(process.env.PORT, (err, address) => {
    if (err){
        fastify.log.error(err);
        process.exit(1)
    }

    fastify.log.info(`server run at ${address}`)
});
