class List{
    constructor(){
        this.data = [];
    }

    add(dt){
        this.data.push(dt);
        console.log(this.data);
    }
}

class TodoList extends List{

    constructor(){
        super();
        this.usuario = 'Dailton Durães';
    }

    mostraUsuario(){
        console.log('O usuário é ' + this.usuario);
    }

    /*
    constructor(){
        this.todos = [];
    }

    addTodos(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }*/

}

const minhaLista = new TodoList();

document.getElementById('newTodo').onclick = function(){
    minhaLista.add('New Todo');
}
document.getElementById('mostraUsuario').onclick = function(){
    minhaLista.mostraUsuario();
}