import Collapsible from '@src/components/atoms/collapsible';
import LoadingIndicator from '@src/components/molecules/loading-indicator';
import Modal from '@src/components/molecules/modal';
import ConfigBar from '@src/components/organisms/config-bar/ConfigBar';
import NotesSection from '@src/components/organisms/notes-section';
import TodosSection from '@src/components/organisms/todos-section';
import SettingsWrapper, {
  SettingsContextProvider,
} from '@src/components/wrappers/settings-wrapper/SettingsWrapper';
import useSections from '@src/hooks/api-hooks/useSections';
import { sectionsTable } from '@src/lib/db';
import { Section } from '@src/types';

export default function App(): JSX.Element {
  const { sections, setSections } = useSections();

  function toggleSection(section: Section, newStatus: Section['status']) {
    setSections((prev) => {
      if (prev) {
        const newState = {
          ...prev,
          [section.type]: {
            ...section,
            status: newStatus,
          },
        };
        return newState;
      } else {
        return undefined;
      }
    });
    sectionsTable.update(section.id as number, { ['status']: newStatus });
  }

  if (!sections) {
    return <>loading</>;
  }

  const { todos, notes } = sections;
  return (
    <SettingsContextProvider>
      <SettingsWrapper>
        <LoadingIndicator />
        <Modal />
        <ConfigBar />
        <div className="dark:bg-dark1 bg-light1 h-screen transition-colors duration-200 p-8">
          {notes.status !== 'inactive' ? (
            <Collapsible
              collapsed={notes.status === 'collapsed'}
              title={notes.title}
              toggle={() =>
                toggleSection(notes, notes.status === 'collapsed' ? 'uncollapsed' : 'collapsed')
              }
              className="w-[900px] mx-auto"
            >
              <NotesSection />
            </Collapsible>
          ) : null}
          {todos.status !== 'inactive' ? (
            <Collapsible
              collapsed={todos.status === 'collapsed'}
              title={todos.title}
              toggle={() =>
                toggleSection(todos, todos.status === 'collapsed' ? 'uncollapsed' : 'collapsed')
              }
              className="w-[900px] mx-auto"
            >
              <TodosSection />
            </Collapsible>
          ) : null}
        </div>
      </SettingsWrapper>
    </SettingsContextProvider>
  );
}
