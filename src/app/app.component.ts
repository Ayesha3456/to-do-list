import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: any[] = [];
  newTodoText: string = '';
  showEmptyMessage: boolean = false;

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        text: this.newTodoText,
        completed: false
      });
      this.newTodoText = '';
      this.showEmptyMessage = false; // Hide the message when input is valid
    } else {
      this.showEmptyMessage = true; // Show the message when input is empty
    }
  }

  // In your component class
  deleteTodo(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

}
