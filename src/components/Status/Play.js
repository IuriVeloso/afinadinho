import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useSound from 'use-sound';
import { Button } from 'antd';

import constants from '../../config/constants.js';
import musical_score from '../../assets/twemoji_musical-score.png';

import { Container } from './styles';

import axios, { bbt } from '../../config/api';  

const Play = () => {
    const [noteIndex, setNoteIndex] = useState(0);
    const [play] = useSound(constants.notas[noteIndex].file);

    const noteName = useMemo(()=>constants.notas[noteIndex].name, [noteIndex]);

    const changeNote = useCallback(()=>{
      console.log("Escrevendo")
      console.log(bbt)
      console.log(bbt.connection.connection.connected)

      setNoteIndex((prevValue)=> {
        if (prevValue === 14){
          return 0;
        }
        return(prevValue + 1);
      });
    },[]);

    useEffect(()=>{
      
      console.log(bbt)
      console.log(bbt.connection.connection.connected)

      bbt.read({
        owner: 'rnagao',
        channel: 'Afinadinho',
        resource: 'frequencia',
        limit: 5,
        callback: function(err, msg){
          console.log(msg)
        }
      });

      try {
        axios.post('/write_broker', {
          resource: "analisar",
          data: true
        })
      } catch (error) {
        console.log(error);
      }

    },[])


    return (
        <Container>
            <span className='title'>Tente cantar esta nota!</span>
            <img src={musical_score} alt='Nota' />
            <span className='subtitle'>{noteName}</span>
            <Button type="dashed" className="buttonStyled" style={{marginTop: '16px'}} onClick={play}> Ouvir</Button>
            <Button type='primary' style={{marginTop: '16px'}} onClick={()=>{changeNote()}}>Mudar nota</Button>
        </Container>
    )
}

export default Play;