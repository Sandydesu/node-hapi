const Joi = require('joi');
const UserController = require("../controllers/user");

module.exports = [
    {
        method: 'GET',
        path: '/users',
        handler: UserController.getAllUsers.bind(this)
    },
    {
        method: 'GET',
        path: '/users/{id}',
        options: {
            validate: {
                params: {
                    id: Joi.string().required()
                }
            }
        },
        handler: UserController.getById.bind(this)
    },
    {
        method: 'POST',
        path: '/users',
        options: {
            validate: {
                payload: {
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    age: Joi.number().required()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: UserController.createOrUpdateUser.bind(this)
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        options: {
            validate: {
                payload: {
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    age: Joi.number().required()
                },
                params: {
                    id: Joi.string().required()
                },
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            }
        },
        handler: UserController.createOrUpdateUser.bind(this)
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        options: {
            validate: {
                params: {
                    id: Joi.string().required()
                }
            }
        },
        handler: UserController.deleteByID.bind(this)
    }
];