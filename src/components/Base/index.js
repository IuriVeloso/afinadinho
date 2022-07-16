import React, { useEffect, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const States = {
  LOADING: 0,
  HOME: 1,
  PLAY: 2,
  GENIUS: 3
}

const Base = ({ children }) => {

  const [status, setStatus] = useState(States.LOADING);

  useEffect(()=>{
    setTimeout(()=>setStatus(States.HOME), 1000)
  } , [])

  return <>
    <Header />
      {React.cloneElement(children, { status: status, setStatus: setStatus })}
    <Footer changeStatus={() => setStatus(States.GENIUS)} />
    </>;
}

export default Base;