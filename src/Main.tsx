import React, { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BaseProvider } from './providers/BaseProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { NotFoundPage } from './pages/NotFoundPage';

const Main = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndexPage />} />
          <Route path='home' element={<IndexPage />} />
          <Route path='*' element={(
            <NotFoundPage />
          )} />
        </Route>
      </Routes>
    </Fragment>    
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BaseProvider>
        <Main />
      </BaseProvider>
    </BrowserRouter>
  </StrictMode>
);
