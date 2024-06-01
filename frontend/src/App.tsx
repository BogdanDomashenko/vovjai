import { useLocalization } from './common/hooks';
import { LoaderScreen, Navbar } from './components/common';
import { Home } from './components/screens';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Works } from './components/screens/Works';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/works/:id',
    element: <Works />,
  },
]);

const App = () => {
  // prefetch languages and translations
  // const languages = useLanguages();
  const localization = useLocalization();

  if (localization.isLoading) return <LoaderScreen />;

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
