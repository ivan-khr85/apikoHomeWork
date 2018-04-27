import ButtonUp from './Component';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { countChangeActions } from '../../modules/countChange';


const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countChangeActions.countUp())
});

const enhancer = compose(
  connect(
    null,
    mapDispatchToProps
  ),
);

export default enhancer(ButtonUp);