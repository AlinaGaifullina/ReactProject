import { makeAutoObservable } from 'mobx';
import Task from './Task.ts';
import TaskService from './TaskService.ts';

export class TodoStore {
  taskList: Task[] = [];
  taskService = new TaskService();

  constructor() {
    makeAutoObservable(this);
    this.getTasks();
  }

  getTasks = () => {
    this.taskList = this.taskService.getTasks();
  };

  addTask(title: string, text: string) {

    this.taskService.createTask({
      title: title,
      text: text,
      completed: false,
    });

    this.getTasks();
  }

  toggleTask = (index: number) => {
    const taskToToggle = this.taskList[index];

    const updatedTask = {
      ...taskToToggle,
      completed: !taskToToggle.completed,
    };

    this.taskService.updateTask(taskToToggle, updatedTask);
    this.getTasks();
  };

  removeTask(index: number) {
    const taskToDelete = this.taskList[index];
    this.taskService.deleteTask(taskToDelete);
    this.getTasks();
  }
}
