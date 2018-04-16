import React from 'react';
import styled from 'styled-components';

import AnswersList from '../AnswersList/Container';
import NewAnswer from '../NewAnswer/Container';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.h1``;


const Description = styled.div`
  font-size: 12pt;
  margin: 10px;
  padding: 15px 0;
`;

const SortByDropdown = styled.select`
  flex-basis: 20%;
  padding: 0 10px;
  font-size: 16pt;
  background: #fff;
  max-width: 100px;
  margin-bottom: 30px;
`;


const QuestionPage = ({ question, author, setAnswerSorting, sortBy }) => (
  <Wrapper>
    <Title>{question.title}</Title>

    <div>By: <strong>{author.profile.fullName}</strong></div>

    <Description>{question.description}</Description>

  <SortByDropdown
    // value={sortBy}
    onChange={setAnswerSorting}
  >
      <option value="createdAt">Time</option>
      <option value="best">Best</option>
      <option value="worst">Worst</option>
  </SortByDropdown>

    <AnswersList />

    <NewAnswer />
  </Wrapper>
);


export default QuestionPage;
