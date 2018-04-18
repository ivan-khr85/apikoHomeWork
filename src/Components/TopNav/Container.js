import T from 'prop-types';
import { connect } from 'react-redux';
import { compose, getContext, withProps } from 'recompose';
import TopNavComponent from './Component';


const MENU_ITEMS = {
  DEFAULT: [
    { label: 'Wrong URL', to: '/wrong-url' },
    { label: 'Google', to: 'https://google.com', target: '_blank' },
  ],
  LOGGED_OUT: [
    { label: 'Sign In', to: '/signin' },
    { label: 'Sign Up', to: '/signup' },
  ],
};


const getItemsForUser = ({ onUserChange, user }) => [
  { label: `Hello, ${user.username}`, to: '' },
  { label: 'Sing Out', to: '', onClick: () => onUserChange() },
];


const generateList = props => [].concat(
  MENU_ITEMS.DEFAULT,
  props.user ? getItemsForUser(props) : MENU_ITEMS.LOGGED_OUT
);

const mapStateToProps = state => ({
  user: state.user
});

export default compose(
  getContext({
    user: T.object,
    onUserChange: T.func,
  }),
  connect(mapStateToProps),
  withProps(props => ({
    list: generateList(props),
  })),
)(TopNavComponent)
