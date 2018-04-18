import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 5px 10px;
  background: #ff9f00;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  transition: box-shadow 200ms, color, background 100ms;
  
  &:hover {
    box-shadow: 0 3px 6px #000;
  }
  
  &:active {
    color: #fff;
    background: #ff6500;
  }
`.withComponent(Link);


export default LinkButton;
