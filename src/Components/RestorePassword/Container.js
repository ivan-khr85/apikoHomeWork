import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import Component from './Component';


const enhance = compose(
  withInputs({
    oldPassword: { validate: value => value.length < 20 && value.length > 5 },
    newPassword: { validate: value => value.length < 20 && value.length > 5 },
  }),

  withRouter,

  withHandlers({
    onSubmit: ({ oldPassword, newPassword, history }) => () => {
      alert(`
        Old: ${oldPassword}
        New: ${newPassword}
      `);
      history.push('/signin')
    }
  }),
);

export default enhance(Component);