var db = require('../config/db.js');
var dateFormat = require('dateformat');
var jwt = require('jsonwebtoken');
var userquery = require('../library/userquery.js');
var commonFunction = require('../library/commonfunction.js');
var userinfo = require('../models/User.model.js');
var login_log = require('../models/Loginlog.model.js');


module.exports.userLogin = function(req, res, next) {

    console.log("request body here", req.body);

    let UserId = req.body.userId;
    let Password = req.body.password;

    console.log("UserId is====>", UserId);
    console.log("Password is====>", Password);
    
    let columnlist = `*`;

    let whereCond = `userId='${UserId}' AND password='${Password}'`;

    userquery.simpleselect(login_log, columnlist, whereCond, null).then(result => {

        var token = jwt.sign({
            id: result[0].userId
        }, config.db.securitykey, {
                expiresIn: 3600
            })
        let response = {
            success: true,
            message: 'Login successful',
            role: result[0].role,
            id: result[0].userId,
            token: token,
            data: result
        }
        res.status(200).json({
            data: response.data,
            success: response.success,
            role: response.role,
            id: response.userId,
            token: response.token
        })
    }).catch(err => {
        console.log("error while login", err);
        let response = {
            success: false,
            message: 'Login failed',
            data: err
        }
        // res.render('login', {});
        res.status(200).json({
            success: response.success,
            data: response.data
        })
    });
}


module.exports.getAllusers = function (req, res, next) {

    userquery.simpleselect(userinfo, `*`, null).then(result => {
        let response = {
            success: true,
            statusCode: 200,
            message: 'get users data',
            data: result
        };
        console.log("successfully getting users data");
        res.status(200).json({
            data: response.data,
            success: response.success
        })
    }).catch(err => {
        let response = {
            success: false,
            statusCode: 500,
            message: 'unable to get users data',
            data: err
        };
        console.log("error while getting users data", response.data);
        res.status(200).json({
            data: response.data,
            success: response.success
        })
    })
}


module.exports.addUser = function (req, res, next) {

    var columnmap = {
        // user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        createdAt: dateFormat(new Date(), 'yyyy-mm-dd')
    }
    console.log("data=====>", columnmap);

    userquery.insertTable(userinfo, columnmap).then(result => {
        let response = {
            success: true,
            statusCode: 200,
            message: 'added users data',
            data: result
        };
        console.log("successfully added users data");
        res.status(200).json({
            data: response.data,
            success: response.success
        })
    }).catch(err => {
        let response = {
            success: false,
            statusCode: 500,
            message: 'unable to add users data',
            data: err
        };
        console.log("error while adding users data", response.data);
        res.status(200).json({
            data: response.data,
            success: response.success
        })
    })
}
