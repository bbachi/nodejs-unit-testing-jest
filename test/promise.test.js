const promise = require('../promise');

test('Testing Promise With Error', async () => {

    promise('http://localhost:3020/tes').catch(err => {
        expect(err).toEqual(Error("url is wrong"));
    })
});

test('Should return data', async () => {

    const data = await promise('http://localhost:3020/test');
    expect(data).toStrictEqual('test');
});