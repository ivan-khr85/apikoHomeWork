import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import { searchOperations } from '../../../../modules/search';
import ListItem from './ListItemView';

const mapDispatchToProps = {
  setItemToHistory: searchOperations.setItemToHistory,
};

  
const enhancer = compose(
  connect(undefined, mapDispatchToProps),
  pure,
);

export default enhancer(ListItem);

