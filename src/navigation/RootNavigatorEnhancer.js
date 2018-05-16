import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withLoadingModal } from '../utils/enhancers';
import { authSelectors } from '../modules/auth';


const mapStateToProps = state => ({
  state: state.nav,
  isLoading: (
    authSelectors.getSigningUpState(state) ||
    authSelectors.getSigningInState(state) ||
    authSelectors.getSigningOutState(state)
  ),
});


export default compose(
  connect(mapStateToProps),
  withLoadingModal.stateProp('isLoading'),

);
