import React, { useState } from 'react';

import { Container } from './styles';

import Modal from '../Modal';

import QuestionIcon from '../../assets/icons/bx_help-circleintIcon.png';
import GamesIcon from '../../assets/icons/fluent_games-16-regulargamesIcon.png';

const Footer = ( {changeStatus} ) => {
  const [showModal, setShowModal] = useState(false);

  return <>
    <Modal show={showModal} setShowModal={setShowModal} footer={null} />
    <Container>
      <img onClick={()=>setShowModal(true)} src={QuestionIcon} alt='QuestIcon'/>
      <img onClick={changeStatus} src={GamesIcon} alt='GamesIcon'/>
    </Container>
  </>;
}

export default Footer;