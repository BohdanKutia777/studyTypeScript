"use strict";
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
sum(2, 4);
function log(name, userId) {
    console.log('Hello', name, 'with Id', userId || 'anonym');
}
log('Bohdan', '123123');
function crash() {
    throw new Error('crash');
}
function average(...nums) {
    let sum = nums.reduce((acc, total) => acc + total);
    return sum / nums.length;
}
