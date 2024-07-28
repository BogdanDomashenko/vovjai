import { useLocalization } from './common/hooks';
import { LoaderScreen, Navbar } from './components/common';
import { Home } from './components/screens';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { Works } from './components/screens/Works';
import useDebounce from './common/hooks/useDebounce';
import { useEffect } from 'react';

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
  const debouncedLoading = useDebounce(localization.isLoading, 1000);

  useEffect(() => {
    if (debouncedLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [debouncedLoading]);

  return (
    <>
      {debouncedLoading && <LoaderScreen className='fixed z-50 h-screen w-full' />}
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
