import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import FormWrapper from '../FormWrapper/Component';
import Form from '../Form/Component';
import StyledHeader from '../Common/StyledHeader';
import TextInput from '../TextInput/Component';
import Button from '../Buttons/Button/index';


const ForgotLink = styled.a`
  display: inline-flex;
  align-self: center;
  padding: 10px;
`.withComponent(Link);


const SignIn = ({ username, password, submitReady, onChange, onSubmit }) => (
  <FormWrapper>
    <Form onSubmit={onSubmit}>
      <StyledHeader>Sign In</StyledHeader>

      <TextInput
        autoFocus
        value={username}
        name="username"
        placeholder="Username"
        onChange={onChange('username')}
      />

      <TextInput
        value={password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChange('password')}
      />

      <ForgotLink to="/restore-password">Forgot password?</ForgotLink>

      <Button
        primary
        type="submit"
        disabled={!submitReady}
      >
        Sign In
      </Button>
    </Form>
  </FormWrapper>
);


export default SignIn;
