import React from 'react'

import { Container } from './styles'

const Modal = ({ show, setShowModal }) =>{
    return (
        <Container onCancel={()=>setShowModal(false)} title={<h2 className='subtitle'>Este é o Afinadinho</h2>} visible={show} footer={null}>
            <div className='text' >
                O afinadinho é um projeto de diapasão eletrônico desenvolvido por alunos da UFRJ para a disciplina de Projeto Integrado, 
                no período de 2022.1. <br/>
                Para utilizá-lo, basta tentar reproduzir a nota que aparece na tela, e receberá como resposta se ela está correta ou não. <br/>
                Caso esteja em busca de um desafio maior, clique no ícone de controle no canto inferior direito que começaremos o jogo 
                de `Genius` de notas.
            </div>
        </Container>
    )
}

export default Modal;