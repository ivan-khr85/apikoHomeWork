import { compose, shouldRender } from 'custom-hoc';
import { withUser } from '../../utils';
import Edit from './Component';


const enhance = compose(
  withUser,
  shouldRender(({ createdById, user }) => user && createdById === user._id)
);


export default enhance(Edit);
