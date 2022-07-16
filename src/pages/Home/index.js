import React, { useMemo } from 'react';

import { Container } from './styles';
import Play from '../../components/Status/Play.js';
import Start from '../../components/Status/Start.js';
import Loading from '../../components/Status/Loading';
import Genius from '../../components/Status/Genius';

const Home = ({ status, setStatus }) => {

    const component = useMemo(()=>{
      switch(status){
        case 0:
          return <Loading />
        case 1:
          return <Start setStatus={setStatus} />
        case 2: 
          return <Play />
        case 3:
          return <Genius />
        default:
          return <div>Error</div>
      }
    }, [status, setStatus])

  return (<Container>{component}</Container>);
}

export default Home;