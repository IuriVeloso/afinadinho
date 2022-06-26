import React, { useCallback, useMemo, useState } from 'react';
import useSound from 'use-sound';
import { Button } from 'antd';

import { SoundOutlined } from '@ant-design/icons';

import constants from '../../config/constants.js';

import musical_score from '../../assets/twemoji_musical-score.png';

import { Container } from './styles';


const Home = () => {
    const [noteIndex, setNoteIndex] = useState(0);
    const [play] = useSound(constants.notas[noteIndex].file);

    const noteName = useMemo(()=>constants.notas[noteIndex].name, [noteIndex])

    const changeNote = useCallback(()=>{
      setNoteIndex((prevValue)=> {
        if (prevValue === 14){
          return 0;
        }
        return(prevValue + 1);
      });
    },[])

  return <Container>
            <span className='title'>Tente cantar esta nota!</span>
            <img src={musical_score} alt='Nota' />
            <span className='subtitle'>{noteName}</span>
            <Button icon={<SoundOutlined />} shape='circle' type='primary' style={{marginTop: '16px'}} onClick={play}></Button>
            <Button type='primary' style={{marginTop: '16px'}} onClick={changeNote}>Mudar nota</Button>

        </Container>;
}

export default Home;