import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
    todos = [];

    constructor(private _todoService: TodoService) {}

    ngOnInit() {
        this.todos = [];
        this._todoService.getAll()
            .map(res => res.json())
            .subscribe(todos => this.todos = todos);
    }

    addTodo($event, todoText) {
        if ($event.which === 13) {
            let result;
            let _todo = {
                text: todoText.value,
                isCompleted: false
            };
            result = this._todoService.save(_todo);
            result.subscribe(x => {
                // keep things in sync
                this.todos.push(_todo);
                todoText.value = '';
            });
        }
    }
}
