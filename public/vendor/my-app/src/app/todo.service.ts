import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(public http: Http) { }
  getAll() {
    return this.http.get('api/v1/todos');
  }

  save(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/v1/todo', JSON.stringify(todo), {headers: headers})
      .map(res => res.json());
  }

  update(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('api/v1/todo/' + todo._id, JSON.stringify(todo), {headers: headers});
  }

  delete (id) {
    return this.http.delete('api/v1/todo/' + id);
  }

}
