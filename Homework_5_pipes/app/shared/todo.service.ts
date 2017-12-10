import {Todo} from './todo';

let todos: Todo[] = [
    {title: 'Learn Angular',
        status: true},
    {title: 'Learn TypeScript',
        status: false},
    {title: 'Learn React',
        status: false},
];

export class TodoService {

    todos: Todo[] = todos;

    getTodoList(): Todo[] {
        return this.todos;
    }

    creatTodo(newTaskTitle: string){
        this.todos.push({title: newTaskTitle, status: false});
    }

    deleteTodo(todo: Todo){
        let i: number = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    }

    toggleTodo(todo: Todo){
        todo.status = !todo.status;
    }
}