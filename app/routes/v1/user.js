'use strict';

const controller = require('../../controllers/user_controller');
const {responseValidationError} = require('../../utils/utils');
const schema = require('../../schemas/user');
const Ajv = require('ajv');
const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    $data: true,
    verbose: true
});

module.exports = (fastify, options, next) => {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: controller.getUser
    });
    fastify.route({
        method: 'POST',
        url: '/',
        preValidation: (request, reply, done) => {
            const validateBody = ajv.compile(schema.add);
            validateBody(request.body);
            if (validateBody.errors){
                return responseValidationError(reply, validateBody.errors);
            }
            done();
        },
        handler: controller.addUser
    });
    next();
};
