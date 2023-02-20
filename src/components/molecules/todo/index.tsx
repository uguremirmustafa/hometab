import { todoTable } from '@src/lib/db';
import { Todo } from '@src/types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import Editable from '../editable';

interface IProps {
  todo: Todo;
  todos: Todo[];
}
function TodoItem(props: IProps) {
  const { todo, todos } = props;

  function saveTodo(text: string, todo: Todo) {
    todoTable.put({ ...todo, name: text }, todo.id);
  }

  function deleteTodo(todo: Todo) {
    const itemsHasHigherIndex = todos.filter((x) => x.index > todo.index);
    const indexDecreasedItems = itemsHasHigherIndex.map((x) => ({ ...x, index: x.index - 1 }));
    const updatedTodo: Todo = { ...todo, isDeleted: true, index: -1 };
    const allItemsToBeUpdated = [...indexDecreasedItems, updatedTodo];
    todoTable.bulkPut(allItemsToBeUpdated);
  }

  return (
    <Draggable key={todo?.id} draggableId={`${todo?.id}`} index={todo.index}>
      {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
        <div {...draggableProps} {...dragHandleProps} ref={innerRef}>
          <Editable
            className={classNames(
              'bg-white hover:bg-gray-50 text-slate-900 dark:text-white border border-gray-200',
              isDragging && 'dark:bg-pc-500 border z-20 dark:border-pc-300 transition-colors',
              !isDragging && getClassNames(todo)
            )}
            value={todo.name}
            handleDelete={() => deleteTodo(todo)}
            onSave={(text: string) => {
              saveTodo(text, todo);
            }}
          />
        </div>
      )}
    </Draggable>
  );
}

export default TodoItem;

const getClassNames = (todo: Todo) => {
  switch (todo.statusId) {
    case 1:
      return 'dark:bg-fc-300/50 dark:border-fc-200';
    case 2:
      return 'dark:bg-sc-300/50 dark:border-sc-200';
    case 3:
      return 'dark:bg-tc-300/50 dark:border-tc-200';
    default:
      return '';
  }
};
