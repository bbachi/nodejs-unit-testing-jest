const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw Error('Inputs should be numbers');
}

const subtract = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    throw Error('Inputs should be numbers');
}

const multiply = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    throw Error('Inputs should be numbers');
}

module.exports = {
    add,
    subtract,
    multiply
}