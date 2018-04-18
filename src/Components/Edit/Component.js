import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Anchor = styled.a`
  display: inline-flex;
  color: #0f0f0f;
  font-weight: 700;
  text-decoration: none;
  padding: 5px 10px;
`.withComponent(Link);


const Edit = ({ user, onUserChange, createdById, ...props }) => (
  <Anchor {...props} />
);


export default Edit;
