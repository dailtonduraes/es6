/*const nome = 'Dailton'
const idade = 35;

const usuario = {
    nome, 
    idade,
    empresa:'CPC INFORMÁTICA'
}

console.log(usuario);*/

const arr = [1,2,3,4, 30];

const newArr = arr.map(function(item){
    return item * 2
});


const sum = arr.reduce(function(total, next){
    return total + next;
})


const arrPares = arr.filter(function(item){
    return (item % 2 === 0);
})

const find = arr.find(function(item){
    return item === 5;
})




console.log(arrPares);

console.log(sum);

console.log(newArr);

console.log(find);