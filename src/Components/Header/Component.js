import React from 'react';
import styled from 'styled-components';

import TextInput from '../TextInput/Component';
import LinkButton from '../Buttons/LinkButton';

const PanelWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const AskButton = styled.span`
  flex-basis: 20%;
  align-items: center;
  font-size: 16pt;
`.withComponent(LinkButton);

const SortByDropdown = styled.select`
  flex-basis: 20%;
  padding: 0 10px;
  font-size: 16pt;
  background: #fff;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: orange;
  font-weight: 700;
  font-size: 13px;
`;

const Header = (
    { search, sortBy, user, changeSearchValue, clearSearchValue, setSorting }
  ) => (
  <PanelWrapper>
    <TextInput
      placeholder="Search..."
      autoFocus
      value={search}
      // Works this way
      onChange={(e) => { changeSearchValue(e.target.value) }}
    />

    <StyledButton onClick={clearSearchValue}>Clear</StyledButton>

    <SortByDropdown
      value={sortBy}
      // And this as well
      onChange={setSorting}
    >
      <option value="createdAt">Time</option>
      <option value="title">Title</option>
    </SortByDropdown>

    {user && (
      <AskButton to="/question/new">
        Ask now!
      </AskButton>
    )}
  </PanelWrapper>
);

export default Header;