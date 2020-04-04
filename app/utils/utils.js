`use strict`;
const {NotFoundError, RequestValidationError} = require('../exceptions/business_exceptions');
exports.response = (reply, data, msg, statusCode) => {
    if (data != null)
        return reply.send({
            'status': 'success',
            'statusCode': statusCode || 200,
            'message': msg || 'Success!',
            'data': data
        });

    return reply.send({
        'status': 'success',
        'statusCode': statusCode || 200,
        'message': msg || 'Success!',
    });
};

exports.responseValidationError = (reply, error) => {
    return reply.code(400).send({
        'status': 'error',
        'statusCode': 400,
        'message': 'error while validate request',
        'error': error
    });
};

exports.errorHandler = (request, reply, error) => {
    if (error instanceof NotFoundError){
        return reply.code(error.status).send({
            status: 'error',
            statusCode: error.status,
            message: error.message
        });
    }else if (error instanceof RequestValidationError){
        return reply.code(error.status).send({
            status: 'error',
            statusCode: error.status,
            message: error.message
        });
    }else{
        return reply.code(500).send({
            status: 'error',
            statusCode: error.status,
            message: 'Internal server error!',
            reason: error
        })
    }
};
