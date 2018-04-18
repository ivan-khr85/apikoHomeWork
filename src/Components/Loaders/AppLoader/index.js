import React from 'react';
import styled from 'styled-components';
import ApikoLogo from "../../ApikoLogo";

const Wrapper = styled.span`
  position: fixed;
  z-index: 9999;
  height: 2em;
  width: 2em;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;


const AppLoader = () => (
  <Wrapper>
    <ApikoLogo height={200}/>
  </Wrapper>
);


export default AppLoader;
