import React from 'react';

import { Spin } from 'antd';

import { Container } from './styles';

const Loading = () => {
    return <Container> <span className='logo-title'>Carregando</span> <Spin size='large'/> </Container>
}

export default Loading;