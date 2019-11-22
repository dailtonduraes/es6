"use strict";

/*const nome = 'Dailton'
const idade = 35;

const usuario = {
    nome, 
    idade,
    empresa:'CPC INFORMÁTICAAA'
}

console.log(usuario);*/
var arr = [1, 2, 3, 4, 30];
var newArr = arr.map(function (item) {
  return item * 2;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var arrPares = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 5;
});
console.log(arrPares);
console.log(sum);
console.log(newArr);
console.log(find);
