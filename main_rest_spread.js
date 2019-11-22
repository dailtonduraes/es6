//REST 
const usuario = {
    nome:'Dailton',
    idade:'35',
    empresa:'CPC INFORMATICA'
}
const {nome, ...resto} = usuario;


const arr  = [1,2,3,4,5,6];
const [a, b, ...c] =  arr;



console.log(nome);
console.log(resto);

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
   return params.reduce((total, next)=> total + next);
}

console.log(soma(1,2,3,4,5));

function soma2(...params){
    return params.reduce(function(total, next){
        return total + next;
    });
}

console.log(soma2(2,6,9));

////////////////////// SPREAD

const arr01 = [1,2,3];
const arr02 = [3,4,5];
const fusao = [...arr01, ...arr02];

const usuario01 = {
    nome:'Joãozinho',
    idade:'19',
    empresa:'CPC informática'
}

const usuario02 = {
    ...usuario01, 
    nome:'Maria',
    idade:'23'
}

console.log(usuario01);
console.log(usuario02);
console.log(fusao);

