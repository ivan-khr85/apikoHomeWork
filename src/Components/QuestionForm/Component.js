import React from 'react';
import styled from 'styled-components';

import Form from '../Form/Component';
import TextInput from '../TextInput/Component';
import Button from '../Buttons/Button';
import StyledHeader from '../Common/StyledHeader';


const Description = styled.textarea`
  width: 100%;
  padding: 8px 20px;
  font-size: 16pt;
  resize: vertical;
  min-height: 200px;
`;


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;


const getHeader = isEdit => isEdit ? 'Edit Question' : 'Add Question';


const QuestionForm = ({ title, description, tags, submitReady, onChange, onSubmit, onRemove, match }) => (
  <Form onSubmit={onSubmit}>
    <StyledHeader>
      {getHeader(match.params.questionId)}
    </StyledHeader>

    <TextInput
      autoFocus
      name="title"
      placeholder="Title"
      value={title}
      onChange={onChange('title')}
    />

    <Description
      name="description"
      placeholder="Description..."
      value={description}
      onChange={onChange('description')}
    />

    <TextInput
      name="tags"
      placeholder="Type tags by whitespace"
      value={tags}
      onChange={onChange('tags')}
    />

    <ButtonWrapper>
      {!!match.params.questionId && (
        <Button onClick={onRemove}>
          Remove
        </Button>
      )}

      <Button
        primary
        type="submit"
        disabled={!submitReady}
      >
        Submit
      </Button>
    </ButtonWrapper>
  </Form>
);


export default QuestionForm;
