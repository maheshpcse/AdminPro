var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user-controller.js');
var operatorCtrl = require('../controllers/operator-controller.js');
var path = require('path');

router.get('/', function(req, res) {
    res.render('login');
});

router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/getoperatorform', function(req, res) {
    res.render(path.join('operator/add-operator'));
});

router.route('/home').post(userCtrl.userLogin);

router.route('/adduser').post(userCtrl.addUser);

router.route('/getallusers').get(userCtrl.getAllusers);

router.route('/home').post(operatorCtrl.addOperator);

module.exports = router;
