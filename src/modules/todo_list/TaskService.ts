import {RealmClient} from '../../RealmClient.ts';
import Task, {TaskTable} from './Task.ts';

export default class TaskService {

  getTasks = () => {
    return RealmClient.objects(TaskTable) as unknown as Task[];
  };

  createTask = (data: object) => {
    RealmClient.write(() => {
      RealmClient.create(TaskTable, data);
    });
  };

  updateTask = (task: Task, values: object) => {
    RealmClient.write(() => {
      Object.assign(task, values);
    });
  };

  deleteTask = (task: Task) => {
    RealmClient.write(() => {
      RealmClient.delete(task);
    });
  };
}
