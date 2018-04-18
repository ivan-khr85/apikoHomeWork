import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Edit from '../Edit/Container';
import Tags from '../Tags/Component';


const QuestionWrapper = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #5b5b5b;
`;


const TopWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


const Title = styled.a`
  display: inline-flex;
  color: #0f0f0f;
  font-weight: 700;
  text-decoration: none;
  font-size: 12pt;
  padding-bottom: 10px;
`.withComponent(Link);


const Time = styled.time`
  display: inline-flex;
  color: #0f0f0f;
  text-decoration: none;
  flex: 3;
  padding: 5px;
  justify-content: flex-end;
  font-weight: 500;
`;


const QuestionItem = ({ question }) => (
  <QuestionWrapper>
    <TopWrapper>
      <Title to={`/question/${question._id}`}>
        {question.title}
      </Title>

      <Edit
        to={`/question/edit/${question._id}`}
        createdById={question.createdById}
      >
        Edit
      </Edit>
    </TopWrapper>

    <BottomWrapper>
      <Tags tags={question.tags} />

      <Time>{question.createdAt.toLocaleDateString()}</Time>
    </BottomWrapper>
  </QuestionWrapper>
);


export default QuestionItem;
