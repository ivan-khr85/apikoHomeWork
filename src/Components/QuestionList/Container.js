import { connect } from 'react-redux';
import { branch, compose, lifecycle, renderComponent, withProps, withStateHandlers } from 'recompose';
import * as R from 'ramda';

import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const LIMIT = 10;

const matchBy = R.curry((search, string) => new RegExp(`${search}`, 'gi').test(string));

const filterByTitle = search => R.filter(R.compose(matchBy(search), R.prop('title')));


const DIRECTION = {
  title: R.ascend,
  createdAt: R.descend,
};

const sortWith = sortBy => R.sortWith([DIRECTION[sortBy](R.prop(sortBy))]);

const prepareQuestions = ({ questions, search, limit, sortBy }) => R.compose(
  R.take(limit),
  sortWith(sortBy),
  filterByTitle(search.replace(/[\\[\]<>+{}]/g, '')),
)(questions);

const mapStateToProps = state => ({
  search: state.search,
  sortBy: state.sort,
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    { questions: [], isFetching: true, limit: LIMIT },
    { onIncreaseLimit: ({ limit }) => () => ({ limit:  limit + LIMIT }) }
  ),
  lifecycle({
    async componentWillMount() {
      const questions = await db.questions.find();
      this.setState({ questions, isFetching: false });
    },
  }),
  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),
  withProps(props => ({ questions: prepareQuestions(props) })),
);


export default enhance(Component);

// WITHOUT RECOMPOSE
// export default connect(state => ({ search: state.search }))(Component)