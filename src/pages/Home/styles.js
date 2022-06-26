import styled from 'styled-components';
import constants from '../../config/constants';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    height: 100vh;

    img {
        margin: 24px 0;
    }

    .title{
        color: ${constants.colors['orange+2']};
        margin-top: 64px;
    }

    .subtitle{

    }
`