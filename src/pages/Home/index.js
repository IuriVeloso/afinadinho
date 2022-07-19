import React, { useMemo, useEffect, useState } from 'react';

import { Container } from './styles';
import Play from '../../components/Status/Play.js';
import Start from '../../components/Status/Start.js';
import Loading from '../../components/Status/Loading';
import Genius from '../../components/Status/Genius';

import constants from '../../config/constants.js';

import axios from '../../config/api';  

const Home = ({ status, setStatus }) => {

  const [musicList, setMusicList] = useState([]);
  const [randIndex, setRandIndex] = useState(0);

  useEffect(()=>{
    axios.get('/notes').then(({ data })=>{
      const finalList = [];
      constants.notas.forEach((eachNote)=>{
        const note = data.find(eachData=> eachData.id === eachNote.id);
        if (note){
          const newNote = {
            name: note.name,
            id: note.id, 
            file: eachNote.file
          };
          finalList.push(newNote);
        }
      })

      const rand = Math.floor(Math.random()*finalList.length);

      setRandIndex(rand);
      setMusicList(finalList);

      console.log(rand, finalList);

      setStatus(1);

    })
  } , [setStatus])

  useEffect(()=>{
    console.log('efeito de antes', randIndex);
  }, [randIndex])

    const component = useMemo(()=>{
      switch(status){
        case 0:
          return <Loading />
        case 1:
          return <Start setStatus={setStatus} />
        case 2: 
          return <Play musicList={musicList} randIndex={randIndex} setRandIndex={setRandIndex} />
        case 3:
          return <Genius musicList={musicList} randIndex={randIndex} setRandIndex={setRandIndex} />
        default:
          return <div>Error</div>
      }
    }, [status, setStatus, musicList, randIndex])

  return (<Container>{component}</Container>);
}

export default Home;