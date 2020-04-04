'use strict';

const boom = require('@hapi/boom');
const service = require('../services/user');
const {response} = require('../utils/utils');

exports.getUser = async (request, reply) => {
    try{
        return response(reply, await service.list(0,0));
    }catch (e) {
        throw e
    }
};

exports.addUser = async (request, reply) => {
  try {
      return response(reply, await service.add(request.body));
  }catch (e) {
      throw e
  }
};

