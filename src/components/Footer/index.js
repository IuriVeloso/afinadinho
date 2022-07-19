import React, { useMemo, useState } from 'react';

import { Container } from './styles';

import Modal from '../Modal';

import QuestionIcon from '../../assets/icons/bx_help-circleintIcon.png';
import GamesIcon from '../../assets/icons/fluent_games-16-regulargamesIcon.png';
import HomeIcon from '../../assets/icons/ant-design_home-outlined.png';

const Footer = ( {status, changeStatus} ) => {
  const [showModal, setShowModal] = useState(false);

  const findButtonComponent = useMemo(()=>{
    if (status === 3){
      return (<img style={{ width: '40px' }} onClick={() => changeStatus(1)} src={HomeIcon} alt='HomeIcon'/>)
    } else {
      return (<img onClick={() => changeStatus(3)} src={GamesIcon} alt='GamesIcon'/>)
    }
  },[changeStatus, status])

  return <>
    <Modal show={showModal} setShowModal={setShowModal} footer={null} />
    <Container>
      <img onClick={()=>setShowModal(true)} src={QuestionIcon} alt='QuestIcon'/>
      {findButtonComponent}
    </Container>
  </>;
}

export default Footer;