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
    badgeClasses = 'bg-slate-100 dark:bg-slate-200';
    columnClasses = 'bg-slate-100/25 dark:bg-slate-200/25';
    todoClasses = 'dark:bg-slate-300/50 border border-gray-200 dark:border-slate-200';
  } else if (id == 2) {
    badgeClasses = 'bg-amber-100 dark:bg-amber-200';
    columnClasses = 'bg-yellow-100/25 dark:bg-yellow-200/25';
    todoClasses = 'dark:bg-yellow-300/50 border border-gray-200 dark:border-yellow-200';
  } else {
    badgeClasses = 'bg-emerald-100 dark:bg-emerald-200';
    columnClasses = 'bg-emerald-100/25 dark:bg-emerald-200/25';
    todoClasses = 'dark:bg-emerald-300/50 border border-gray-200 dark:border-emerald-200';
  }

  function saveTodo(text: string, todo: Todo) {
    todoTable.put({ ...todo, name: text }, todo.id);
  }

  function deleteTodo(todoId: Todo['id']) {
    console.log(todoId);
  }

  return (
    <div
      className={`min-h-[200px] rounded p-2 shadow opacity-95 hover:opacity-100 transition-opacity ${columnClasses}`}
    >
      <Badge className={`${badgeClasses} text-slate-900 shadow-sm hover:shadow-md transition`}>
        {name}
      </Badge>
      <div className="flex flex-col gap-2 my-3">
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
    </div>
  );
}

export default TodoColumn;
