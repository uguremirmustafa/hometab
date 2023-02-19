import { todoTable } from '@src/lib/db';
import { groupBy } from '@src/lib/helper-functions';
import { Todo } from '@src/types';
import { useLiveQuery } from 'dexie-react-hooks';
import { useState } from 'react';

function useTodos() {
  const [todos, setTodos] = useState<Record<2 | 1 | 3, Todo[]>>({
    1: [],
    2: [],
    3: [],
  });
  const [loading, setLoading] = useState(false);

  const todosData = useLiveQuery(
    async () => {
      setLoading(true);
      const todos = await todoTable.filter((x) => !x.isDeleted).sortBy('index');
      const groupedTodos = groupBy(todos, (x) => x.statusId as 1 | 2 | 3);
      setTodos((old) => {
        return {
          '1': groupedTodos['1'] ?? [],
          '2': groupedTodos['2'] ?? [],
          '3': groupedTodos['3'] ?? [],
        };
      });
      setLoading(false);
      return { groupedTodos, todos };
    },
    [],
    { todos: [], groupedTodos: { 1: [], 2: [], 3: [] } }
  );

  return {
    todos,
    isLoadingForTodos: loading,
    setTodos,
  };
}

export default useTodos;
