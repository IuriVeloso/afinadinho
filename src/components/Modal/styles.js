import styled from 'styled-components';
import constants from '../../config/constants';

import { Modal } from 'antd';

export const Container = styled(Modal)`
    width: 80vw !important;

    .text {
        text-align:  justify;
    }
    border: 3px solid ${constants.colors['yellow+1']};
    border-radius: 16px;
    background: ${constants.colors['orange-1']} ;

    .ant-modal-content {
        border-radius: 16px;
        background: ${constants.colors['orange-1']};
        box-shadow: none;
    }
    .ant-modal-header{
        border: 0;
        border-radius: 16px;
        background: ${constants.colors['orange-1']} ;
    }
  
`;
