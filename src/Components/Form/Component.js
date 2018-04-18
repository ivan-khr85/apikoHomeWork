import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';


const propTypes = {
  direction: T.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ]),
};


const defaultProps = {
  direction: 'column',
};


const Form = styled.form`
  padding: 0;
  display: flex;
  flex-direction: ${props => props.direction};

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;


Form.propTypes = propTypes;


Form.defaultProps = defaultProps;


export default props => (
  <Form
    {...props}
    onSubmit={(event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(event);
    }}
  />
);