import 'normalize.css';
import './css/styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IndexPage } from './pages/IndexPage';
import { ResumePage } from './pages/ResumePage';
import { BlogPage } from './pages/BlogPage';
import { ProjectPage } from './pages/ProjectPage';

const Main = () => {
  return (
    <App>
      <Header />
      <AnimatePresence mode="wait" initial={true}>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </App>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>Look's like you're lost.</div>,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/writing',
        element: <BlogPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
