/**
 * Created by Jordi on 15/12/2015.
 */

var mongoose = require('mongoose');
var bignum = require('bignum');
var sha256 = require('sha256');
var User = mongoose.model('user');
var Country = mongoose.model('countries');
var RSA = require('./rsa');

/*---------------------------------------------------------------------------------*/
// BASIC CRUD

// Get countries
exports.getTeachers = function (req, res) {
    Country.find(function (err, country) {
        if (err) res.send(500, err.message);

        console.log('GET /teachers');
        res.status(200).jsonp(country);
    });
};




// Update votes
exports.voteCountry = function (req, res) {
    var conditions = {name: req.params.name}
        , update = {$inc: {votes: 1}};

    Teacher.update(conditions, update, function (err, country) {
        console.log("Vote country");

        res.send('Updated');
    });
};