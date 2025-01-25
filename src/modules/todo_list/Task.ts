import Realm, {ObjectSchema} from 'realm';

export const TaskTable = 'Task';

export default class Task extends Realm.Object<Task>{
  title!: string;
  text!: string;
  completed!: boolean;

  static schema: ObjectSchema = {
    name: TaskTable,
    properties: {
      title: 'string',
      text: 'string',
      completed: 'bool',
    },
  };
}
