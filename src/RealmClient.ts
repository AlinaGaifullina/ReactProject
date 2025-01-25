import Task from './modules/todo_list/Task.ts';

export const RealmClient = new Realm({schema: [Task.schema]});
