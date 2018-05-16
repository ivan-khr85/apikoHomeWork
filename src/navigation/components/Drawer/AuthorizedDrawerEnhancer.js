import {
  compose,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../../modules/auth';
import { LinkingService, AlertService } from '../../../services';
import { navigationOperations } from '../../../modules/navigation';


const mapDispatchToProps = {
  signOut: authOperations.signOut,
};


export default compose(
  connect(undefined, mapDispatchToProps),
  withHandlers({
    onPressSignOut: props => () => AlertService.singOut(
      async () => {
        await props.signOut();
        props.navigation.dispatch(navigationOperations.navigateToUnauthorized());
      },
    ),
    onPressTerms: () => () => LinkingService.openTerms(),
  }),
);
