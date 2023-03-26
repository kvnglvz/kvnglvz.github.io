import React, { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BaseProvider } from './providers/BaseProvider';
import { IndexPage } from './pages/IndexPage';

const Main = () => {
  return (
    <Fragment>
      <App>
        <IndexPage />
      </App>
    </Fragment>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <BaseProvider>
      <Main />
    </BaseProvider>
  </StrictMode>,
);
