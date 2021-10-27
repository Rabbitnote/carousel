import React from 'react';
import styled from '@emotion/styled';
const SliderContent = styled.div`
    transfrom: translateX(-${props => props.translate}px);
    transition: transfrom ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`;
export default SliderContent;
