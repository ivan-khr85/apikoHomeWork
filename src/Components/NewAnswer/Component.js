import React from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import Form from '../Form/Component';
import TextInput from '../TextInput/Component';


const Wrapper = styled.div`
  margin: 20px 0;
`;


const NewAnswer = ({ answer, onChange, submitReady, onSubmit }) => (
  <Wrapper>
    <Form onSubmit={onSubmit}>
      <TextInput
        placeholder="Type your comment here..."
        value={answer}
        onChange={onChange('answer')}
      />

      <Button
        primary
        type="submit"
        disabled={!submitReady}
      >
        Answer
      </Button>
    </Form>
  </Wrapper>
);


export default NewAnswer;
