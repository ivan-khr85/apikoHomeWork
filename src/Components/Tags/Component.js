import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: inline-flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;


const Tag = styled.span`
  display: inline-flex;
  background: #009c00;
  color: #fff;
  padding: 5px 10px;
  margin-right: 5px;
`;


const Tags = ({ tags }) => (
  <Wrapper>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </Wrapper>
);


export default Tags;
