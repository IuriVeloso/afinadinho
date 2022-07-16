import React from 'react';

import GlobalStyles from './config/globalStyles';
import Routes from './routes';

import 'antd/dist/antd.min.css'

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
