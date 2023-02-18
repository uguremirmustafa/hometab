import { ColorName } from '@src/components/organisms/settings-button/setting-sections/theme-settings/types';
import { Setting, Status, Todo } from '@src/types';
import { Dexie } from 'dexie';

class MyAppDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  todo!: Dexie.Table<Todo, number>; // number = type of the primkey
  status!: Dexie.Table<Status, number>; // number = type of the primkey
  setting!: Dexie.Table<Setting, number>; // number = type of the primkey

  constructor() {
    super('MyAppDatabase');
    this.version(1).stores({
      todo: '++id,name,statusId',
      status: '++id,name',
      setting: '++id,name,description,value,type',
      //...other tables goes here...
    });
  }
}

export const db = new MyAppDatabase();

export const todoTable = db.todo;
todoTable.bulkAdd([
  { id: 1, name: 'Finish hometab', statusId: 2 },
  { id: 2, name: 'Add search functionality', statusId: 1 },
  { id: 3, name: 'Clean up the kitchen', statusId: 1 },
  { id: 4, name: 'Buy a present to Feyza', statusId: 3 },
]);

export const statusTable = db.status;
statusTable.bulkAdd([
  { name: 'not started', id: 1 },
  { name: 'in progress', id: 2 },
  { name: 'done', id: 3 },
]);

export const settingsTable = db.setting;
const colors: Setting<ColorName>[] = [
  { id: 1, name: 'todo_col_1_clr', value: 'cerise', type: 'color' },
  { id: 2, name: 'todo_col_2_clr', value: 'asparagus', type: 'color' },
  { id: 3, name: 'todo_col_3_clr', value: 'salomie', type: 'color' },
  { id: 4, name: 'pc', value: 'turquoise-blue', type: 'color' },
];
settingsTable.bulkAdd(colors);
