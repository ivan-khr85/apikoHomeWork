import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from 'recompose';
import * as R from 'ramda';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { db } from '../../utils';

import AppLoader from '../Loaders/AppLoader';
import Component from './Component';

const mapStateToProps = state => ({
  user: state.user,
  sortBy: state.answerSort

});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    ({ answers: [], users: [], votes: [], isFetching: true }),
  ),

  withRouter,

  lifecycle({
    componentWillMount() {
      this.interval = db.pooling(async () => {
        const questionId = this.props.match.params.questionId;

        let answers = await db.answers.find();
        answers = answers.filter(answer => answer.questionId === questionId);

        let votes = await db.votes.find();
        const answerIds = answers.map(a => a._id);
        votes = votes.filter(vote => answerIds.includes(vote.answerId));

        const users = await db.users.find();

        const votesByAnswerId = (votes, answerId) => votes.filter(vote => vote.answerId === answerId);

        const divideVotes = votes => {
          const positive = votes.filter(vote => vote.isPositive).length;
          const negative = votes.length - positive;
          return { positive, negative };
        };

        const divideByAnswerId = (votes, answerId) => divideVotes(votesByAnswerId(votes, answerId));

        // const prepareAnswers = ([...answers]) => (
        //   answers
        //     .map(answer => {
        //       const { positive, negative } = divideByAnswerId(votes, answer._id);
        //       return {
        //         ...answer,
        //         positive,
        //         negative
        //       };
        //     })
        // );

        const prepareAnswers = R.map(answer => ({
          ...answer, ...divideByAnswerId(votes, answer._id)
        }));

        this.setState({ answers: prepareAnswers(answers), votes, users, isFetching: false });

      });
    },
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  }),


  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),

  withHandlers({
    onVote: ({ user }) => (answerId, isPositive) => {
      if (user) {
        db.votes.insert({
          answerId,
          isPositive,
          createdAt: new Date(),
          createdById: user._id,
        });
      }
    }
  }),
);


export default enhance(Component);
