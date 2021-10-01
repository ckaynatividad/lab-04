// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;


import { add } from '/..calculations.js';
import { sub } from '/..calculations.js';
import { mul } from '/..calculations.js';
import { div } from '/..calculations.js';


test('add', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 4;

    const actual = add(input1, input2);

    expect.equal(actual, expected);
});

test('sub', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 0;

    const actual = sub(input1, input2);

    expect.equal(actual, expected);
});

test('mul', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 6;

    const actual = mul(input1, input2);

    expect.equal(actual, expected);
});

test('div', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 1;

    const actual = div(input1, input2);

    expect.equal(actual, expected);
});
