import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;
  todos: object[];
  form: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit() {
    this.form = this.fb.group({
      todo: ['']
    });
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  addTodo(todo: string) {
    this.loading = true;
    this.todoService.addTodo(todo).subscribe(data => {
      this.todos = data;
      this.form.reset();
      this.loading = false;
    });
  }

  onAction(todoId: string, action: string) {
    this.loading = true;
    if (action === 'done' || action === 'undo') {
      this.todoService.updateTodo(todoId, action).subscribe(data => {
        this.todos = data;
        this.loading = false;
      });
    } else if (action === 'delete') {
      this.todoService.deleteTodo(todoId).subscribe(data => {
        this.todos = data;
        this.loading = false;
      });
    }
  }
}
