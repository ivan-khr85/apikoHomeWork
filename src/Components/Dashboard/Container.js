import { compose, withInputs } from 'custom-hoc';
import { withUser } from '../../utils';
import Component from './Component';

const enhance = compose(
  withUser,
  withInputs({
    search: 1,
    sortBy: { defaultValue: 'createdAt' },
  }),
);


export default enhance(Component);
