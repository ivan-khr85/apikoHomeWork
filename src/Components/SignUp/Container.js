import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { withUser } from '../../utils';
import Component from './Component';


const enhance = compose(
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    email: { validate: value => value.length < 25 && value.length > 6 },
    password: { validate: value => value.length < 20 && value.length > 5 },
  }),
  withRouter,
  withUser,
  withHandlers({
    onSubmit: ({ onUserChange, username, email, password, history }) => () => {
      onUserChange({ username, password, email, _id: '1' });

      history.push('/');
    }
  }),
);

export default enhance(Component);