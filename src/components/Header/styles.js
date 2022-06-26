import styled from 'styled-components';
import constants from '../../config/constants';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${constants.colors['yellow+2']};
    display: flex;
    place-content: center;
    color: ${constants.colors['yellow-2']};

    span {
        line-height: 60px;
    }
`