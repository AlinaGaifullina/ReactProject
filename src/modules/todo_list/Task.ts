export class Task{
  text: string;
  completed: boolean;
  constructor(text: string, completed: boolean) {
    this.text = text;
    this.completed = completed;
  }
}

export default Task;
