import { AddIcon } from '@src/assets/icons';
import Badge from '@src/components/atoms/badge';
import { todoTable } from '@src/lib/db';
import { Status, Todo } from '@src/types';
import { useLiveQuery } from 'dexie-react-hooks';
import Editable from '../editable';

interface IProps {
  column: Status;
}

function TodoColumn(props: IProps) {
  const { column } = props;
  const todos = useLiveQuery(
    async () => {
      const todos = await todoTable
        .where('statusId')
        .equals(column.id as number)
        .toArray();
      return todos;
    },
    [column?.id],
    []
  );

  const { name, id } = column;

  let badgeClasses = '';
  let columnClasses = '';
  let todoClasses = '';
  if (id === 1) {
    badgeClasses = 'bg-fc-100 dark:bg-fc-200';
    columnClasses = 'bg-fc-100/25 dark:bg-fc-200/25';
    todoClasses = 'dark:bg-fc-300/50 border border-fc-200 dark:border-fc-200';
    // badgeClasses = 'bg-slate-100 dark:bg-slate-200';
    // columnClasses = 'bg-slate-100/25 dark:bg-slate-200/25';
    // todoClasses = 'dark:bg-slate-300/50 border border-gray-200 dark:border-slate-200';
  } else if (id == 2) {
    badgeClasses = 'bg-sc-100 dark:bg-sc-200';
    columnClasses = 'bg-sc-100/25 dark:bg-sc-200/25';
    todoClasses = 'dark:bg-sc-300/50 border border-gray-200 dark:border-sc-200';
  } else {
    badgeClasses = 'bg-tc-100 dark:bg-tc-200';
    columnClasses = 'bg-tc-100/25 dark:bg-tc-200/25';
    todoClasses = 'dark:bg-tc-300/50 border border-gray-200 dark:border-tc-200';
  }

  function saveTodo(text: string, todo: Todo) {
    todoTable.put({ ...todo, name: text }, todo.id);
  }

  function deleteTodo(todoId: Todo['id']) {
    todoTable.delete(todoId as number);
  }

  function addTodo() {
    todoTable.add({ name: 'Untitled', statusId: column.id as Todo['statusId'] });
  }

  return (
    <div
      className={` rounded p-2 shadow opacity-95 hover:opacity-100 transition-opacity ${columnClasses}`}
    >
      <div className="flex items-center justify-between">
        <Badge className={`${badgeClasses} text-slate-900 shadow-sm hover:shadow-md transition`}>
          {name}
        </Badge>
        <button onClick={addTodo} className="p-[2px] dark:hover:bg-slate-400/50">
          <AddIcon size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-2 my-2">
        {todos.map((todo) => {
          return (
            <Editable
              key={todo?.id}
              className={`${todoClasses}  bg-white hover:bg-gray-50 text-slate-900 dark:text-white `}
              value={todo.name}
              handleDelete={() => deleteTodo(todo?.id)}
              onSave={(text: string) => {
                saveTodo(text, todo);
              }}
            />
          );
        })}
      </div>

      <button
        onClick={addTodo}
        className="p-2 w-full flex gap-2 dark:hover:bg-slate-400/50 hover:bg-slate-100"
      >
        <AddIcon size={18} /> <span>New</span>
      </button>
    </div>
  );
}

export default TodoColumn;
