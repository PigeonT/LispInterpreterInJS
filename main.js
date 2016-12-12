"use strict";
var fs = require('fs');
fs.readFile('codes.txt', function (err, data) {
    if (err)
        console.error(data);
    console.log(data.toString());
});
