import T from 'prop-types';
import { getContext } from 'recompose';


const withUser =   getContext({
  user: T.object,
  onUserChange: T.func,
});


export default withUser;
