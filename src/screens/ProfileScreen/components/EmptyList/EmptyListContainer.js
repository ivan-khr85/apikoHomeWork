import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import EmptyList from './EmptyListView';
import { authSelectors } from '../../../../modules/auth';
import { navigationOperations } from '../../../../modules/navigation';
import { userSelectors } from '../../../../modules/user';

const mapStateToProps = state => ({
  signedIn: authSelectors.getSignedInState(state),
  isLoading: userSelectors.getGettingInfoState(state),
});

const enhancer = compose(
  connect(
    mapStateToProps,
  ),
  withHandlers({
    navigateToCreateQuestion: props => () => (
      props.dispatch(navigationOperations.navigateToCreateQuestion())
    ),
    navigateSignUp: props => () => (
      props.dispatch(navigationOperations.navigateToSignUp())
    ),
  }),
);

export default enhancer(EmptyList);
