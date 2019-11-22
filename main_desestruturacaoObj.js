const usuario = {
    nome:'dailtonduraes',
    idade:'35',
    endereco:{
        cidade:'São paulo',
        estado:'SP'
    }
}

/**desestruturação de objetos */

const {nome, idade, endereco:{cidade, estado}} = usuario;

function mostraNome({nome, idade}){
    console.log(nome, idade);
}



console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

mostraNome(usuario);


