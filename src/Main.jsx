import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BaseProvider } from './providers/BaseProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { NotFoundPage } from './pages/NotFoundPage';

const Main = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<App />}>
          <Route index element={<IndexPage />} />
          <Route path='*' element={(
            <NotFoundPage />
          )} />
        </Route>
      </Routes>
    </Fragment>    
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseProvider>
        <Main />
      </BaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
