import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Todo} from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    listTodos: Todo[] = [];

    constructor(private http: Http){}

    getTodoList(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .then(todos => this.listTodos = todos)
                        .catch(this.handleError);
    }

    createTodo(title: string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let todo = new Todo(title);

        this.http.post(this.apiUrl, todo, options)
            .toPromise()
            .then(res => res.json().data)
            .then(todo => this.listTodos.push(todo))
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
            .toPromise()
            .then(res => {let i = this.listTodos.indexOf(todo);
                        this.listTodos.splice(i,1);})
            .catch(this.handleError);
    }

    toggleTodo(todo: Todo){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.put(url, todo, options)
            .toPromise()
            .then(res => {todo.status = !todo.status;})
            .catch(this.handleError);
    }

    private handleError(error:any){
        console.error('Произошла ошибка. Файл не найден или сервер перегружен.', error);
        return Promise.reject(error.message || error);
    }
}