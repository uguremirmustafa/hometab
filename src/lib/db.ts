import { ColorName } from '@src/components/organisms/settings-button/setting-sections/theme-settings/types';
import { Setting, Status, StatusType, Todo } from '@src/types';
import { Dexie } from 'dexie';

class MyAppDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  todo!: Dexie.Table<Todo, number>; // number = type of the primkey
  status!: Dexie.Table<Status, StatusType>; // number = type of the primkey
  setting!: Dexie.Table<Setting, number>; // number = type of the primkey

  constructor() {
    super('MyAppDatabase');
    this.version(2).stores({
      todo: '++id,name,statusId,index,isDeleted,dueDate,description',
      status: 'id,name',
      setting: '++id,name,description,value,type',
      //...other tables goes here...
    });
  }
}

export const db = new MyAppDatabase();

export const todoTable = db.todo;
todoTable.bulkAdd([
  {
    id: 1,
    name: 'Finish hometab',
    description: 'Some long content goes here so that we can work with this long text.',
    statusId: 1,
    index: 0,
  },
  { id: 2, name: 'Add search functionality', statusId: 1, index: 0 },
  { id: 3, name: 'Clean up the kitchen', statusId: 1, index: 1 },
  { id: 4, name: 'Buy a present to Feyza', statusId: 3, index: 0 },
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
