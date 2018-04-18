import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { userActions } from '../../modules/user';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { withUser } from '../../utils';
import Component from './Component';


const enhance = compose(
  // just to get dispatch function below
  connect(),
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    password: { validate: value => value.length < 20 && value.length > 5 }
  }),
  withRouter,
  withUser,
  withHandlers({
    onSubmit: ({ onUserChange, username, password, history, dispatch }) => () => {
      dispatch(userActions.signIn({ username }));
      onUserChange({ username, password, _id: '1' });

      history.push('/');
    }
  }),
);

export default enhance(Component);