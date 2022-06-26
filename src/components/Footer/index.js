import React from 'react';

import { Container } from './styles';

import QuestionIcon from '../../assets/icons/bx_help-circleintIcon.png';
import GamesIcon from '../../assets/icons/fluent_games-16-regulargamesIcon.png';

const Footer = () => {
  return <Container>
    <img src={QuestionIcon} alt='QuestIcon'/>
    <img src={GamesIcon} alt='GamesIcon'/>
  </Container>;
}

export default Footer;