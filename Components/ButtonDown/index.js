import ButtonDown from './Component';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { countChangeActions } from '../../modules/countChange';


const mapDispatchToProps = dispatch => ({
  countDown: () => dispatch(countChangeActions.countDown())
});

const enhancer = compose(
  connect(
    null,
    mapDispatchToProps
  ),
);

export default enhancer(ButtonDown);