import { compose } from 'recompose';
import { connect } from 'react-redux';
import Home from './Component';
import { countActions, countSelectors } from '../../modules/count';

const mapStateToProps = state => ({
  countValue: countSelectors.getCountValue(state),
});

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countActions.countUp()),
  countDown: () => dispatch(countActions.countDown()),
});

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhancer(Home);
