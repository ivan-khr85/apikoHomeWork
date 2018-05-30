import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import { searchSelectors, searchOperations } from '../../../../modules/search';
import SearchHistory from './SearchHistoryView';


const mapStateToProps = state => ({
  history: searchSelectors.getSearchHistory(state),
});

const mapDispatchToProps = {
  removeItemFromHistory: searchOperations.removeItemFromHistory,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
);

export default enhancer(SearchHistory);

