import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  serverURL = '/api/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(this.serverURL);
  }

  addTodo(todo: string): Observable<any> {
    return this.http.post(this.serverURL, { todo: todo });
  }

  updateTodo(todoId: string, action: string): Observable<any> {
    return this.http.put(this.serverURL + todoId, { action: action });
  }

  deleteTodo(todoId: string): Observable<any> {
    return this.http.delete(this.serverURL + todoId);
  }
}
