import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { headerStyle } from '../../styles';
import s from './style';
import AnswersList from './components/AnswersList';
import { BackBtn, TextInput, Touchable } from '../../components';
import QuestionItem from './components/QuestionItem';

const QuestionScreen = ({
  isLoading,
  isLoadingMore,
  question,
  answers,
  id,
  getAnswers,
  getAnswersMore,
  hasNoMore,
}) => (
  <KeyboardAwareScrollView contentContainerStyle={s.container}>
    <View style={s.top}>
      <QuestionItem question={question} />

      <AnswersList
        onRefresh={() => getAnswers(id)}
        refreshing={isLoading}
        data={answers}
        onEndReachedThreshold={0.7}
        onEndReached={() => getAnswersMore(id)}
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
      />
    </View>
    <View style={s.bottom}>
      <View style={s.inputContainer}>
        <TextInput
          multiline
          style={s.input}
          placeholder=" Type your answer here..."
        />
      </View>
      <View style={s.btnContainer}>
        <Touchable
          onPress={() => { }}
          style={s.btn}
        >
          <Text style={s.btnText}>Submit Answer</Text>
        </Touchable>
      </View>
    </View>
  </KeyboardAwareScrollView>
);


QuestionScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  headerLeft: (
    <BackBtn navigation={navigation} title="Back" />
  ),
});


QuestionScreen.propTypes = {
  question: T.object,
  isLoading: T.bool,
  getAnswers: T.func,
  id: T.string,
  answers: T.array,
  isLoadingMore: T.bool,
  getAnswersMore: T.func,
  hasNoMore: T.bool,
  
};

export default QuestionScreen;
