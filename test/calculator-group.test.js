const { add, subtract, multiply } = require('../calculator');

describe("Testing with done", () => {

    test('Adding two numbers', (done) => {
        expect(add(5, 5)).toStrictEqual(10)
        expect(add(100, 200)).toStrictEqual(300)
        done()
    })
    
    test('Subtracting two numbers', (done) => {
        expect(subtract(10, 10)).toStrictEqual(0)
        expect(subtract(200, 100)).toStrictEqual(100)
        done()
    })
    
    test('Multiplying two numbers', (done) => {
        expect(multiply(10, 10)).toStrictEqual(100)
        expect(multiply(200, 100)).toStrictEqual(20000)
        done()
    })

})

describe("Testing with async", () => {

    test('Adding two numbers', async () => {
        expect(add(5, 5)).toStrictEqual(10)
        expect(add(100, 200)).toStrictEqual(300)
    })
    
    test('Subtracting two numbers', async () => {
        expect(subtract(10, 10)).toStrictEqual(0)
        expect(subtract(200, 100)).toStrictEqual(100)
    })
    
    test('Multiplying two numbers', async () => {
        expect(multiply(10, 10)).toStrictEqual(100)
        expect(multiply(200, 100)).toStrictEqual(20000)
    })

})