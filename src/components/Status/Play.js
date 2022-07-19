import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useSound from 'use-sound';
import { Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

import constants from '../../config/constants.js';
import musical_score from '../../assets/twemoji_musical-score.png';

import { Container } from './styles';

import axios, { bbt } from '../../config/api';  

const statusList = {
  LISTENING: 0,
  SUCCESS: 1,
  ERROR:2
}

const Play = ({ musicList, randIndex, setRandIndex }) => {
    const [status, setStatus] = useState(statusList.LISTENING);

    const [play] = useSound(musicList[randIndex].file);

    const noteName = useMemo(()=>musicList[randIndex].name,  [ randIndex, musicList ]);

    const randomize = useCallback(()=>{
      const rand = Math.floor(Math.random()*musicList.length);
      setRandIndex(rand);
    },[musicList, setRandIndex])

    const handleFindFrequency = useCallback(()=>{
        axios.get(`/note_analysis`).then(({ data })=>{
          if ( data.afinado ) {
            setStatus(statusList.SUCCESS)
          } else {
            setStatus(statusList.ERROR)
          }
        }, (err)=>{
          console.log(err);
        });
        try {
          axios.post('/write_broker', {
            resource: "analisar",
            data: false
          })
        } catch (error) {
          console.log(error);
        }
    },[]);

    useEffect(()=>{
      bbt.subscribe({
        channel: 'Afinadinho',
        resource: 'analisar',
        read: true,
        callback: (msg)=>{
          if (msg.data){
            handleFindFrequency();
          }
        }
        });

      try {
        const notaId = musicList[randIndex].id;
        axios.post('/write_broker', {
          resource: "nota_id",
          data: notaId
        })
      } catch (error) {
        console.log(error);
      }

      try {
        axios.post('/write_broker', {
          resource: "gravar",
          data: true
        })
      } catch (error) {
        console.log(error);
      }

    },[handleFindFrequency, musicList, randIndex])

    const content = useMemo(()=>{
      switch(status){
        case statusList.LISTENING:
          return (
          <>
            <span className='title'>Tente cantar esta nota!</span>
            <img src={musical_score} alt='Nota' />
            <span className='subtitle'>{noteName}</span>
            <Button 
              type="dashed" 
              className="buttonStyled" 
              style={{marginTop: '16px'}} 
              onClick={play}> 
                Ouvir
              </Button>
          </>)
        case statusList.SUCCESS:
          return (
            <>
              <span className='title'>Parábens, você acertou!</span>
              <CheckCircleOutlined style={{fontSize: '128px', margin: '12px 0', color: constants.colors['orange+2']}} />
              <Button 
                type="dashed" 
                className="buttonStyled" 
                style={{marginTop: '16px'}} 
                onClick={()=>{ setStatus(statusList.LISTENING); randomize(); }}>Tentar outra nota</Button>
            </>)
        case statusList.ERROR:  
          return (
            <>
              <span className='title'>Não é esta a nota!</span>
              <CloseCircleOutlined style={{fontSize: '128px', margin: '12px 0', color: constants.colors['orange+2']}} />
              <Button 
                type="dashed" 
                className="buttonStyled" 
                style={{marginTop: '16px'}} 
                onClick={()=>{ setStatus(statusList.LISTENING); randomize(); }}>Tentar novamente</Button>
            </>)
        default:
          return (
            <>
              <span className='title'>Tente cantar esta nota!</span>
              <img src={musical_score} alt='Nota' />
              <span className='subtitle'>{noteName}</span>
              <Button 
                type="dashed" 
                className="buttonStyled" 
                style={{marginTop: '16px'}} 
                onClick={play}> Ouvir</Button>
            </>)
      }
    },[status, noteName, play, randomize])


    return (
        <Container>
            {content}
        </Container>
    )
}

export default Play;