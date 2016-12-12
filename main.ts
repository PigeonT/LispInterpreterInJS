import * as fs from 'fs';

fs.readFile('codes.txt', (err, data) => {
    if(err) console.error(data);
    console.log(data.toString());
});
