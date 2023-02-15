import Button from '@src/components/atoms/button';
import Modal from '@src/components/molecules/modal';
import ThemeSwitcher from '@src/components/molecules/theme-switcher/ThemeSwitcher';
import SettingsButton from '@src/components/organisms/settings-button';
import { todoTable } from '@src/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function App(): JSX.Element {
  const todos = useLiveQuery(async () => await todoTable.where('statusId').equals(1).toArray(), []);

  async function addTodo() {
    await todoTable.add({ name: 'ugur', statusId: 1 });
  }

  return (
    <>
      <Modal />
      <SettingsButton />
      <div className="dark:bg-dark1 bg-light1 h-screen">
        <ThemeSwitcher />
        <Button onClick={addTodo}>hometab</Button>
        <pre className="text-xl">{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </>
  );
}
