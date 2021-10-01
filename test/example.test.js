// IMPORT MODULES under test here:
import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mul } from './calculations.js';
import { div } from './calculations.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('test add function', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 4;

    const actual = add(input1, input2);

    expect.equal(actual, expected, 'add test');
});


test('test sub function', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 0;

    const actual = sub(input1, input2);

    expect.equal(actual, expected, 'sub test');
});

test('test mul function', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 6;

    const actual = mul(input1, input2);

    expect.equal(actual, expected, 'mul test');
});

test('test div function', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 1;

    const actual = div(input1, input2);

    expect.equal(actual, expected, 'div test');
});
