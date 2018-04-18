import React from 'react';
import short from './loader.gif';
import long from './long.png';
import styled from 'styled-components';


const Img = styled.img`
  cursor: pointer;
`;

const ApikoLogo = props => (
  <Img
    src={props.long ? long : short}
    alt="Apiko Logo"
    {...props}
  />
);


export default ApikoLogo;
