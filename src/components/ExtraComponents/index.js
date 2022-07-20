import React, { useCallback, useEffect } from 'react';
import useSound from 'use-sound';

import { Button } from 'antd';

import musical_score from '../../assets/twemoji_musical-score.png';

import axios, { bbt } from '../../config/api'; 

const ExtraComponents = ({ note, setStatus, setGeniusIndex, listSize, geniusIndex }) => {

    const [play] = useSound(note.file);

    const handleFindFrequency = useCallback((index, size)=>{
        axios.get(`/note_analysis`).then(({ data })=>{
          if ( data.afinado ) {
            if (index + 1 === size){
                setStatus(1)
            } else {
                setGeniusIndex(prevValues => prevValues+1)
            }
          } else {
            setStatus(2)
          }
          bbt.disconnect();
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
    },[ setStatus, setGeniusIndex]);

    useEffect(()=>{

        bbt.subscribe({
          channel: 'Afinadinho',
          resource: 'analisar',
          read: true
          }, function(msg){
            if (msg.data){
              handleFindFrequency(geniusIndex, listSize);
            }
          });
  
        try {
          const notaId = note.id;
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
  
      },[handleFindFrequency, note, geniusIndex, listSize])
  


  return (<>
    <span className='title'>Tente cantar esta nota!</span>
    <img src={musical_score} alt='Nota' />
    <span className='subtitle'>{note.name}</span>
    <Button 
      type="dashed" 
      className="buttonStyled" 
      style={{marginTop: '16px'}} 
      onClick={play}
      > 
        Ouvir
      </Button>
  </>);
}

export default ExtraComponents;