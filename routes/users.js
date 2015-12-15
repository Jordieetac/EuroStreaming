 module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var User = require('/models/user/');


  getUsers = function (req, res) {
    console.log("HELOO");
    User.find(function (err, users) {
          if (err)
            res.send(err)
          res.json(users); // devuelve todos los Users en JSON
        }
    );
  }
  newUser = function (req, res) {

    // Creo el objeto Empresa
    console.log(req.body);
    User.create(
        {
          name: req.body.name
        },
        function (err, user) {
          if (err)
            res.send(err);
          // Obtine y devuelve todas las routes tras crear una de ellas
          Empresa.find({tags: {$in: user.name}}, function (err, user) {
            if (err)
              res.send(err)
            res.json(user);
          });
        });

  }
  app.get('/', getUsers);
   app.post('/', newUser);
  module.exports = router;
}
