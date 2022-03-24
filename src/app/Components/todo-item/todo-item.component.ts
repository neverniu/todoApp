import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  isEdit: boolean = false;
  title: string = ''
  constructor() { }
  @Input() todo: Todo;
  @Input() index: number;
  @Output() toggleToDo: EventEmitter<number> = new EventEmitter();
  @Output() deleteToDo: EventEmitter<number> = new EventEmitter();
  @Output() updateTodo: EventEmitter<{ title: string, index: number }> = new EventEmitter();

  ngOnInit(): void {
  }

  onClickToggle(index: number) {
    this.toggleToDo.emit(index)
  }

  onClickDeleteToDo(index: number) {
    this.deleteToDo.emit(index)
  }

  onClickEditTodo() {
    this.title = this.todo.title;
    this.isEdit = !this.isEdit;
  }

  onClickUpdateToDo() {
    this.updateTodo.emit({ title: this.title, index: this.index });
    this.isEdit = !this.isEdit;

  }


}
