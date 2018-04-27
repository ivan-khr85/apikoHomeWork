import Count from './Component';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  count: state.countChange,
});

const enhancer = compose(
  connect(
    mapStateToProps,
  ),
);

export default enhancer(Count);