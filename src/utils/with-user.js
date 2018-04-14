import {object, func } from 'prop-types';
import { getContext } from 'recompose';


const withUser =   getContext({
  user: object,
  onUserChange: func,
});


export default withUser;
