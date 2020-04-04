module.exports = {
    add: {
        type: 'object',
        required: ['username', 'fist_name', 'password'],
        allOf: [{
            properties: {
                username: {
                    type: 'string',
                },
                fist_name: {
                    type: 'string',
                },
                password: {
                    type: 'string',
                },
            },
        }]
    }
};
