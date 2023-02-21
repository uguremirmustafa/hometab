import { todoTable } from '@src/lib/db';
import { useModal } from '@src/lib/store';
import { Todo } from '@src/types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import Editable from '../editable';
import TodoDetails from './TodoDetails';

interface IProps {
  todo: Todo;
  todos: Todo[];
}
function TodoItem(props: IProps) {
  const { todo, todos } = props;
  const { setModal } = useModal();

  function saveTodo(text: string, todo: Todo) {
    todoTable.update(todo.id as number, { ['name']: text.trim() });
  }

  function deleteTodo(todo: Todo) {
    const itemsHasHigherIndex = todos.filter((x) => x.index > todo.index);
    const indexDecreasedItems = itemsHasHigherIndex.map((x) => ({ ...x, index: x.index - 1 }));
    const updatedTodo: Todo = { ...todo, isDeleted: true, index: -1 };
    const allItemsToBeUpdated = [...indexDecreasedItems, updatedTodo];
    todoTable.bulkPut(allItemsToBeUpdated);
  }

  async function openTodoDetails(t: Todo) {
    const todo = await todoTable.get(t.id as number);
    if (todo) {
      setModal({
        id: `${todo?.id}_todoDetails`,
        content: <TodoDetails todo={todo} />,
        title: 'Todo Details',
        type: 'modal',
        maxWidth: 'max-w-3xl',
      });
    } else {
      console.error('todo not found');
    }
  }

  return (
    <Draggable draggableId={`${todo?.id}`} index={todo.index}>
      {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
        <div {...dragHandleProps} {...draggableProps} ref={innerRef}>
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
            openModal={() => {
              openTodoDetails(todo);
            }}
          />
        </div>
      )}
    </Draggable>
  );
}

export default TodoItem;

export const getClassNames = (todo: Todo) => {
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
