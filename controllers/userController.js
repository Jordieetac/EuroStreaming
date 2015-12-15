/**
 * Created by Jordi on 15/12/2015.
 */
var mongoose = require('mongoose');
var bignum = require('bignum');
var sha256 = require('sha256');
var User = mongoose.model('userModel');
var RSA = require('./rsa');

/*---------------------------------------------------------------------------------*/
// BASIC CRUD

// Get all students
exports.getUsers = function (req, res) {
    User.find(function (err, student) {
        if (err) res.send(500, err.message);

        console.log('Listing users ...');
        res.status(200).jsonp(student);
    });
};

// Create student account
exports.addUser = function (req, res) {
    console.log('POST /student');
    console.log(req.body);

    User.findOne({username: req.body.username}, function (err, user) {
        if (!user) {
            var user = new User({
                name: req.body.name,
                dni: req.body.dni

            });

            user.save(function (err) {
                if (!err) {
                    console.log('Student added');
                }
                else
                    console.log('ERROR', +err);
            });

            res.send(user.dni);
        } else {
            res.send('Ese usuario ya está en uso');
        }

    })
}

// Update an existent student
exports.contarVoto = function (req, res) {
    User.findOneAndUpdate({"_id": req.params.dni}, req.body, function (err, user) {
        student.set(function (err) {
            if (!err) {
                //ACTUALIZR HAS VOTED = TRUE
            }
            else {
                console.log('ERROR' + err);
            }
        });
        res.send('Voto contado');
    });
};



