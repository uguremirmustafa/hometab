import Button from '@src/components/atoms/button';
import Modal from '@src/components/molecules/modal';
import { todoTable } from '@src/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';
import ConfigBar from '@src/components/organisms/config-bar/ConfigBar';

export default function App(): JSX.Element {
  const todos = useLiveQuery(async () => await todoTable.where('statusId').equals(1).toArray(), []);

  async function addTodo() {
    await todoTable.add({ name: 'ugur', statusId: 1 });
  }

  return (
    <>
      <Modal />
      <ConfigBar />
      <div className="dark:bg-dark1 bg-light1 h-screen">
        <Button onClick={addTodo}>hometab</Button>
        <pre className="text-xl">{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </>
  );
}
