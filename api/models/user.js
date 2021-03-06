'use strict'

const mongoose = require('mongoose');

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - username
 *       - email
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *       image:
 *         type: string
 *       googleId:
 *         type: string
 */

let schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String,
        default : ""
    },
    googleId : {
        type : String
    }
});

module.exports = mongoose.model("User", schema);