import { makeAutoObservable } from 'mobx';
import Task from './Task.ts';

export class TodoStore {
  taskList: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text: string) {
    this.taskList.push(new Task(text, false));
    console.log('Updated taskList:', this.taskList);
  }

  toggleTodo(index: number) {
    this.taskList = this.taskList.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
  }

  removeTodo(index: number) {
    this.taskList = this.taskList.filter((_, i) => i !== index);
  }
}
