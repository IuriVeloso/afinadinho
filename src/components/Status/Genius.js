import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

import constants from '../../config/constants.js';

import { Container } from './styles';
import ExtraComponents from '../ExtraComponents';

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
        const newNote = musicList[randLevel];
        setGeniusList([...geniusList, newNote]);
    },[musicList, geniusList])

    const restart = useCallback(()=>{
        const randLevel = Math.floor(Math.random()*musicList.length);
        setGeniusIndex(0);
        setGeniusList([musicList[randLevel]]);
      },[musicList])

    const content = useMemo(()=>{
      switch(status){
        case statusList.LISTENING:
          return (
            <ExtraComponents 
              note={geniusList[geniusIndex]} 
              setStatus={setStatus} 
              setGeniusIndex={setGeniusIndex}
              listSize={geniusList.length} 
              geniusIndex={geniusIndex}
          />)
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
            <ExtraComponents 
                note={geniusList[geniusIndex]} 
                setStatus={setStatus} 
                setGeniusIndex={setGeniusIndex}
                listSize={geniusList.length} 
                geniusIndex={geniusIndex}
              />)
      }
    },[status, noteName, nextLevel, restart, geniusIndex, geniusList])


    return (
        <Container>
            {content}
        </Container>
    )
}

export default Genius;