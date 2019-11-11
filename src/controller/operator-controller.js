var db = require('../config/db.js');
var dateFormat = require('dateformat');
var userquery = require('../library/userquery.js');
var commonFunction = require('../library/commonfunction.js');
var operator_info = require('../models/Operator.model.js');

module.exports.addOperator = function (req, res, next) {

    var columnmap = {
        op_id: 3,
        operator_id: req.body.op_id,
        name: req.body.op_name,
        machine: req.body.machine_name,
        createdAt: dateFormat(new Date(), 'yyyy-mm-dd')
    }
    console.log("data=====>", columnmap);

    userquery.insertTable(operator_info, columnmap).then(result => {
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
