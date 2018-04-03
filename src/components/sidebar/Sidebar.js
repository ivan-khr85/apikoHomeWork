import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  margin: auto;
  border-bottom: solid 1px black;
  box-sizing: 2px;
  `;

const StyledLink = styled(Link) `
  padding: 15px;
  display: inline-block;
  text-decoration: none;

  :hover {
    background-color: #ccc;
    transition: 1s;
    color: black;
  }

  :visited {
    color: black;
  }
`;



const Sidebar = () => (
  <Div>
    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/wrong-url'>Wrong URL</StyledLink>
  </Div>
);

export default Sidebar;