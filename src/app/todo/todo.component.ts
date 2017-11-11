import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: string;
  @Input() done: boolean;
  @Output() action: EventEmitter<string>;

  constructor() {
    this.action = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onDone(event) {
    this.action.emit('done');
  }

  onUndone(event) {
    this.action.emit('undo');
  }

  onDelete(event) {
    this.action.emit('delete');
  }
}
