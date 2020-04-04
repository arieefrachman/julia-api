`use strict`;
const User = require('../models/user');
const {NotFoundError} = require('../exceptions/business_exceptions');

exports.list = async (page, limit) => {
    try {
        return await User.find();
    }catch (e) {
        throw e;
    }
};

exports.add = async (body) => {
    try {
        const user = new User(body);
        return  await user.save();
    }catch (e) {
        throw e;
    }
}
