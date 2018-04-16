import React from 'react';
import T from 'prop-types';
import { compose, withContext, withState } from 'recompose';
import { db } from './utils';
import styled from 'styled-components';
import { userActions } from './modules/user';
import store from './modules/store';

import TopNavContainer from './Components/TopNav/Container';
import Routes from './Components/Routes/Component';


const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto 50px;
  padding: 0 15px;
`;


const App = () => (
  <RootWrapper>
    <TopNavContainer />

    <Routes />
  </RootWrapper>
);


const enhance = compose(
  withState('user', 'onUserChange', null),

  withContext(
    {
      user: T.object,
      onUserChange: T.func,
    },
    props => ({
      user: props.user,
      onUserChange: (user) => {
        let userDoc;
        if (user) {
          userDoc = {
            _id: user._id,
            email: user.email || 'apiko@apiko.com',
            profile: {
              fullName: user.username,
            },
            services: {},
          };
          db.users.insert(userDoc);
        } else {
          store.dispatch(userActions.signOut());
        }

        props.onUserChange(userDoc);
      },
    }),
  )
);


export default enhance(App);
