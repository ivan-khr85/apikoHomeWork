import React from 'react';
import styled from 'styled-components';

import TextInput from "../TextInput/Component";
import Button from "../Buttons/Button/index";
import StyledHeader from "../Common/StyledHeader";
import Form from "../Form/Component";


const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;


const SignUp = ({ onSubmit, submitReady, onChange, username, password, email }) => (
  <Wrapper>
    <Form onSubmit={onSubmit}>
      <StyledHeader>Sign Up</StyledHeader>

      <TextInput
        autoFocus
        value={username}
        name="username"
        placeholder="Username"
        onChange={onChange('username')}
      />

      <TextInput
        value={email}
        name="email"
        type="email"
        placeholder="Email"
        onChange={onChange('email')}
      />

      <TextInput
        value={password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChange('password')}
      />

      <Button
        primary
        type="submit"
        disabled={!submitReady}
      >
        Sign Up
      </Button>
    </Form>
  </Wrapper>
);


export default SignUp;
