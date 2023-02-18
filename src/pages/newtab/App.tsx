import Modal from '@src/components/molecules/modal';
import ConfigBar from '@src/components/organisms/config-bar/ConfigBar';
import TodosSection from '@src/components/organisms/todos-section';
import SettingsWrapper, {
  SettingsContextProvider,
} from '@src/components/wrappers/settings-wrapper/SettingsWrapper';

export default function App(): JSX.Element {
  return (
    <SettingsContextProvider>
      <SettingsWrapper>
        <Modal />
        <ConfigBar />
        <div className="dark:bg-dark1 bg-light1 h-screen transition-colors duration-500 p-8">
          <TodosSection />
        </div>
      </SettingsWrapper>
    </SettingsContextProvider>
  );
}
