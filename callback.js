var rp = require('request-promise');

module.exports = (url, cb) => {
    if (url !== 'http://localhost:3020/test') { 
        cb(Error('url is wrong'))
    } else {
        rp(url).then(data => {
            cb(null, data);
        }).catch(err => cb(err))
    }
}