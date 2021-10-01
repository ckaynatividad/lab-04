
import { add } from './calculations.js';
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-output');

addButton.addEventListener('click', ()=>{
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    console.log(result);
    addAnswer.textContent = result;
    addAnswer.classList.add('final');
});

import { sub } from './calculations.js';
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-output');

subButton.addEventListener('click', ()=>{
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    console.log(result);
    subAnswer.textContent = result;
    subAnswer.classList.add('final');
});

import { mul } from './calculations.js';
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulButton = document.getElementById('mul-btn');
const mulAnswer = document.getElementById('mul-output');

mulButton.addEventListener('click', ()=>{
    const value1 = Number(mulInput1.value);
    const value2 = Number(mulInput2.value);
    const result = mul(value1, value2);
    console.log(result);
    mulAnswer.textContent = result;
    mulAnswer.classList.add('final');
});

import { div } from './calculations.js';
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-btn');
const divAnswer = document.getElementById('div-output');

divButton.addEventListener('click', ()=>{  
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);
    const result = div(value1, value2);
    console.log(result);
    divAnswer.textContent = result;
    divAnswer.classList.add('final');
});



import { sqrt } from './calculations.js';
const sqrtInput1 = document.getElementById('sqrt-input-1');
const sqrtButton = document.getElementById('sqrt-btn');
const sqrtAnswer = document.getElementById('sqrt-output');

sqrtButton.addEventListener('click', ()=>{
    const value1 = Number(sqrtInput1.value);
    const result = sqrt(value1);
    console.log(result);
    sqrtAnswer.textContent = result;
    sqrtAnswer.classList.add('final');
});

import { pyth } from './calculations.js';
const pythInput1 = document.getElementById('pyth-input-1');
const pythInput2 = document.getElementById('pyth-input-2');
const pythButton = document.getElementById('pyth-btn');
const pythAnswer = document.getElementById('pyth-output');

pythButton.addEventListener('click', ()=>{
    const value1 = Number(pythInput1.value);
    const value2 = Number(pythInput2.value);
    const result = pyth(value1, value2);
    console.log(result);
    pythAnswer.textContent = result;
    pythAnswer.classList.add('final');
});

import { divInt } from './calculations.js';
const divIntInput1 = document.getElementById('divInt-input-1');
const divIntInput2 = document.getElementById('divInt-input-2');
const divIntButton = document.getElementById('divInt-btn');
const divIntAnswer = document.getElementById('divInt-output');

divIntButton.addEventListener('click', ()=>{
    const value1 = Number(divIntInput1.value);
    const value2 = Number(divIntInput2.value);
    const result = divInt(value1, value2);
    console.log(result);
    divIntAnswer.textContent = result;
    divIntAnswer.classList.add('final');
});

import { rem } from './calculations.js';
const remInput1 = document.getElementById('rem-input-1');
const remInput2 = document.getElementById('rem-input-2');
const remButton = document.getElementById('rem-btn');
const remAnswer = document.getElementById('rem-output');

remButton.addEventListener('click', ()=>{
    const value1 = Number(remInput1.value);
    const value2 = Number(remInput2.value);
    const result = rem(value1, value2);
    console.log(result);
    remAnswer.textContent = result;
    remAnswer.classList.add('final');
});

