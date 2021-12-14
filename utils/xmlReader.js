const fs = require('fs');
const parser = require('xml2json');

module.exports = {

    xmldata: new Promise((resolve, reject) => {
            fs.readFile('./items.xml',(err, data) => {
                if (err) { reject(err); }
                resolve(parser.toJson(data, {object: true}));
            });
        })
}
