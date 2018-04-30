import { compose } from 'recompose';
import { connect } from 'react-redux';
import Home from './Component';
import { countChangeActions } from '../../modules/countChange';

const mapStateToProps = state => ({
  countValue: state.countValue,
});

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countChangeActions.countUp()),
  countDown: () => dispatch(countChangeActions.countDown()),
});

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhancer(Home);
