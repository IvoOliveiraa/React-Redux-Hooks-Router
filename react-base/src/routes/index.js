import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </>
  );
}
