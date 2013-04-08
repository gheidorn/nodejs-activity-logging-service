/*
    als.js - utilities for the activity logging service
*/
fs = require('fs');

function generateFileName(logType) {
    
    var now = new Date();

    var fileTimeStamp = now.getFullYear();
    var curMonth = (now.getMonth() + 1);
    fileTimeStamp = fileTimeStamp + (curMonth < 10) ? "0" + curMonth : curMonth;

    var curDay = (now.getDate() + 1);
    fileTimeStamp = fileTimeStamp + (curDay < 10) ? "0" + curDay : curDay;

    fileTimeStamp = fileTimeStamp + (now.getDate() + 1) + '.' + now.getHours() + now.getMinutes() + now.getSeconds();    
    var filename = logType + '.activity.' + fileTimeStamp + '.log';

    return filename;
}

var initActivityLogs = function () {
    // initialize log files
    console.log('initializing acvitity logs ... ');

    var filename = generateFileName('search');
    fs.writeFile(filename, '[header line]', function(err) {
        if(err) {
            console.log('error attempting to write to impression.activity.json');
            console.log(err);
        } else {
            //console.log('wrote to log');
        }    
    });
    console.log('created ' + filename);

    filename = generateFileName('impression');
    fs.writeFile(filename, '[header line]', function(err) {
        if(err) {
            console.log('error attempting to write to impression.activity.json');
            console.log(err);
        } else {
            //console.log('wrote to log');
        }    
    });
    console.log('created ' + filename);

    filename = generateFileName('clickthru');
    fs.writeFile(filename, '[header line]', function(err) {
        if(err) {
            console.log('error attempting to write to impression.activity.json');
            console.log(err);
        } else {
            //console.log('wrote to log');
        }    
    });
    console.log('created ' + filename);
};


exports.initActivityLogs = initActivityLogs;