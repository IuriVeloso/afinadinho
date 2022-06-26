import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Base = ({children}) => {
  return <>
    <Header />
      {children}
    <Footer />
    </>;
}

export default Base;