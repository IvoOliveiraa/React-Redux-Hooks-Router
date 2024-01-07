import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Login from './pages/Login';
import Page404 from './pages/Page404';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}
