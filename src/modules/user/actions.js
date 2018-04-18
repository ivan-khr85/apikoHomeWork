import { userTypes } from './';

const signIn = user => ({
  type: userTypes.SIGN_IN,
  value: user,
});

const signOut = user => ({
  type: userTypes.SIGN_OUT,
});

export default { signIn, signOut };