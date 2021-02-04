const callback = require('../callback');

test('Testing Call Back With Error', (done) => {

    callback('http://localhost:3020/tes', (err) => {
        
        expect(err).toEqual(Error("url is wrong"));
        done();
    })
});

test('Should return data', (done) => {

    callback('http://localhost:3020/test', (err, data) => {
        
        expect(data).toStrictEqual('test');
        done();
    })
});