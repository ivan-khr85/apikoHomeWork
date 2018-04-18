import React from 'react';
import styled from 'styled-components';

import QuestionList from '../QuestionList/Container';
import Header from '../Header/Container';

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Dashboard = ({ search, sortBy, onChange, user }) => (
  <MainWrapper>
    <Header user={user} />
    <QuestionList />
  </MainWrapper>
);


export default Dashboard;
