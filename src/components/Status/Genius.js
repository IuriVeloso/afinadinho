import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

const Genius = ({ musicList, randIndex }) => {

    const [status, setStatus] = useState(statusList.LISTENING);
    const [geniusList, setGeniusList] = useState([musicList[randIndex]]);
    const [geniusIndex, setGeniusIndex] = useState(0);

    // const [play] = useSound(geniusList[geniusIndex].file);

    const noteName = useMemo(()=> geniusList[geniusIndex].name,  [ geniusList, geniusIndex ]);

    const nextLevel = useCallback(()=>{
        const randLevel = Math.floor(Math.random()*musicList.length);
        setGeniusIndex(0);
        setGeniusList((prevValues)=> ([...prevValues, musicList[randLevel]]));
    },[musicList])

    const restart = useCallback(()=>{
        const randLevel = Math.floor(Math.random()*musicList.length);
        setGeniusIndex(0);
        setGeniusList([musicList[randLevel]]);
      },[musicList])

    const handleFindFrequency = useCallback(()=>{
        axios.get(`/note_analysis`).then(({ data })=>{
          if ( data.afinado ) {
            if (geniusIndex + 1 === geniusList.length){
                setStatus(statusList.SUCCESS)
            } else {
                setGeniusIndex(prevValues => prevValues+1)
            }
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
    },[ geniusIndex, geniusList]);

    useEffect(()=>{
      bbt.subscribe({
        channel: 'Afinadinho',
        resource: 'analisar',
        read: true
        }, (msg)=>{
          if (msg.data){
            handleFindFrequency();
          }
        });

      try {
        const notaId = geniusList[geniusIndex].id;
        axios.post('/write_broker', {
          resource: "nota_id",
          data: notaId
        }
        )} catch (error) {
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

    },[handleFindFrequency, geniusIndex, geniusList])

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
              //onClick={play}
              > 
                Ouvir
              </Button>
          </>)
        case statusList.SUCCESS:
          return (
            <>
              <span className='title'>Parábens, você acertou todas as notas!</span>
              <CheckCircleOutlined style={{fontSize: '128px', margin: '12px 0', color: constants.colors['orange+2']}} />
              <Button 
                type="dashed" 
                className="buttonStyled" 
                style={{marginTop: '16px'}} 
                onClick={()=>{ setStatus(statusList.LISTENING); nextLevel();}}>Próximo nível</Button>
            </>)
        case statusList.ERROR:  
          return (
            <>
              <span className='title'>Você errou a nota <br/> {noteName}</span>
              <CloseCircleOutlined style={{fontSize: '128px', margin: '12px 0', color: constants.colors['orange+2']}} />
              <Button 
                type="dashed" 
                className="buttonStyled" 
                style={{marginTop: '16px'}} 
                onClick={()=>{ setStatus(statusList.LISTENING); restart(); }}>Tentar novamente</Button>
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
                //</>onClick={play}
                > 
                    Ouvir
                </Button>
            </>)
      }
    },[status, noteName, nextLevel, restart])


    return (
        <Container>
            {content}
        </Container>
    )
}

export default Genius;