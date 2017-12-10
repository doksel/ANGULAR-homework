import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from './todo';

export class InMemoryTodoDataService implements InMemoryDbService{
    createDb(){
        const todos: Todo[] = [
            {id: 1,
                title: 'Learn Angular',
                status: true},
            {id: 2,
                title: 'Learn TypeScript',
                status: false},
            {id: 3,
                title: 'Learn React',
                status: false},
        ];
        return {todos};
    }
}
