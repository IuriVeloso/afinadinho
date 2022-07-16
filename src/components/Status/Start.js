import React from 'react';
import { Button } from 'antd';
import { Container } from './styles';


const Start = ({ setStatus }) => {
    return (
            <Container> 
                <span className='title'>Este é o</span> 
                <span className='logo-title' style={{fontSize: '60px', margin: '16px 0'}}>Afinadinho</span> 
                <span className='title' style={{'textAlign': 'center'}}>Clique abaixo para começar!</span> 
                <Button type='dashed' style={{marginTop: '16px'}} className='buttonStyled' onClick={()=>setStatus(2)}>Começar</Button>
            </Container>
        )
}

export default Start;