import TodoColumn from '@src/components/molecules/todo-column';
import { statusTable } from '@src/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';

function TodosSection() {
  const columns = useLiveQuery(async () => await statusTable.toArray());

  if (!columns) {
    return <>loading</>;
  }

  if (columns && columns.length !== 3) {
    return <>there must be three columns but got {columns.length}</>;
  }

  return (
    <div className="w-[900px] grid grid-cols-12 gap-4 mx-auto p-4 rounded">
      {columns?.map((col, i) => {
        return (
          <div className="col-span-4" key={i}>
            <TodoColumn column={col} />
          </div>
        );
      })}
    </div>
  );
}

export default TodosSection;
