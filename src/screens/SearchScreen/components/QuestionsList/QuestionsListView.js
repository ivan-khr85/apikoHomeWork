import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import { Separator, ListFooter } from '../../../../components';
import s from './style';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  navigateToQuestion,
  hideData,
  inputValue,
  data,
  loadingMoreError,
  getQuestionsMore,
  ...props
}) => (
  <FlatList
    {...props}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    data={data}
    ListFooterComponent={() => (
      (hideData && data.length === 0) ? null
      : (<ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
        onError={getQuestionsMore}
        loadingMoreError={loadingMoreError}
        textFooter="No more questions"
        styleContainer={s.footerContainer}
      />)
    )}
    renderItem={({ item }) => (
      <ListItem
        {...item}
        inputValue={inputValue}
        navigateToQuestion={navigateToQuestion}
      />
    )}

  />
);

QuestionsList.propTypes = {
  props: T.any,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  navigateToQuestion: T.func,
  hideData: T.bool,
  inputValue: T.string,
  data: T.array,
  loadingMoreError: T.bool,
  getQuestionsMore: T.func,
};


export default QuestionsList;
