import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()

export class HttpService {
    constructor(public httpClient:HttpClient) {

    }

    getUsers() {
        return this.httpClient
        .get('https://jsonplaceholder.typicode.com/users')
        .pipe(map(res => res));
    }

    addUser(user) {
        return this.httpClient
        .post('https://jsonplaceholder.typicode.com/users', user)
        .pipe(map(res => res));
    }

    deleteUser(id) {
        return this.httpClient
        .delete('https://jsonplaceholder.typicode.com/users/'+id)
        .pipe(map(res => res));
    }

    updateUser(user) {
        return this.httpClient
        .put('https://jsonplaceholder.typicode.com/users/'+user.id, user)
        .pipe(map(res => res));
    }
}