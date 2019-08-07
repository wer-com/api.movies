const express = require('express');
const movies = express.Router();
const pool = require('../db/mysql');

module.exports = movies;