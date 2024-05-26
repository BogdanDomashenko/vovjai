import { useLocalization } from './common/hooks';
import { LoaderScreen, Navbar } from './components/common';
import { Home } from './components/screens';
const App = () => {
  // prefetch languages and translations
  // const languages = useLanguages();
  const localization = useLocalization();

  if (localization.isLoading) return <LoaderScreen />;

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
