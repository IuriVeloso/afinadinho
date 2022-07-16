import styled from 'styled-components';
import constants from '../../config/constants';

export const Container = styled.div`

    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-spin{
        margin-top: 32px;
    }
    .ant-spin-dot-item{
        background-color: ${constants.colors['orange+2']};
    }
`;
