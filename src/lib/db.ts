import { Dexie } from 'dexie';

interface Todo {
  id?: number;
  name: string;
  statusId: number;
}
interface Status {
  id?: number;
  name: string;
}

class MyAppDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  todo!: Dexie.Table<Todo, number>; // number = type of the primkey
  status!: Dexie.Table<Status, number>; // number = type of the primkey

  constructor() {
    super('MyAppDatabase');
    this.version(1).stores({
      todo: '++id,name,statusId',
      status: '++id,name',
      //...other tables goes here...
    });
  }
}

export const db = new MyAppDatabase();

export const todoTable = db.todo;
export const statusTable = db.status;
statusTable.bulkAdd([
  { name: 'not started', id: 1 },
  { name: 'in progress', id: 2 },
  { name: 'done', id: 3 },
]);
