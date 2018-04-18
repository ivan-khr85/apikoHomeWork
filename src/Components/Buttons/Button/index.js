import styled from 'styled-components';


const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  transition: box-shadow 200, color, background 100ms;
  border: ${props => props.primary ? 'none' : '3px solid #ff9f00'};
  padding: ${props => props.primary ? '10px 20px' : '5px 10px'};
  background: ${props => props.primary ? '#00a0ff' : '#fff'};
  color: ${props => props.primary ? '#ffffff' : '#ff9f00'};
  font-size: ${props => props.primary ? '14pt' : '12pt'};

  &:hover:not([disabled]) {
    box-shadow: 0 3px 6px ${props => props.primary ? '#8f8f8f' : '#ff000c'};
  }
  
  &:active {
    color: #fff;
    background: ${props => props.primary ? '#ff6500' : '#ff9f00'};
  }
  
  &[disabled] {
    background: gainsboro;
    color: #0d0045;
  }
`;


Button.defaultProps = {
  type: 'button',
};


export default Button;
