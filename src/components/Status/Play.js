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

    const handleFindFrequency = useCallback(()=>{
      try {
        const data = axios.get('/note_analysis/1');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },[])

    useEffect(()=>{

      bbt.subscribe({
        channel: 'Afinadinho',
        resource: 'frequencia',
        read: true,
        callback: (msg, err)=>{
          if (!err){
            console.log('Ouviu')

            handleFindFrequency(msg.data);
          }
        }
        });

      bbt.read({
        owner: 'rnagao',
        channel: 'Afinadinho',
        resource: 'frequencia'
      }, (msg, err) => {
        console.log(msg, err)
      });

      try {
        axios.post('/write_broker', {
          resource: "gravar",
          data: true
        })
      } catch (error) {
        console.log(error);
      }

    },[handleFindFrequency])


    return (
        <Container>
            <span className='title'>Tente cantar esta nota!</span>
            <img src={musical_score} alt='Nota' />
            <span className='subtitle'>{noteName}</span>
            <Button type="dashed" className="buttonStyled" style={{marginTop: '16px'}} onClick={play}> Ouvir</Button>
        </Container>
    )
}

export default Play;