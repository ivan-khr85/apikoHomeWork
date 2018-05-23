import React from 'react';
import { colors } from '../../styles';
import { View, Text, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { headerStyle } from '../../styles';
import s from './style';
import AnswersList from './components/AnswersList';
import { BackBtn, TextInput, Touchable } from '../../components';
import QuestionItem from './components/QuestionItem';

const QuestionScreen = ({
  isPublishing,
  signedIn,
  isLoading,
  isLoadingMore,
  question,
  answers,
  id,
  getAnswers,
  getAnswersMore,
  hasNoMore,
  publishAnswer,
  onChange,
  description,
  navigateSignUp,
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
      {signedIn &&
        <View style={s.inputContainer}>
          <TextInput
            multiline
            style={s.input}
            placeholder=" Type your answer here..."
            value={description}
            onChangeText={text => onChange('description', text)}
          />
        </View>
      }

      <View style={[s.btnContainer, !signedIn && s.signedOut]}>
        {!isPublishing &&
        <Touchable
          onPress={
            signedIn ?
            publishAnswer :
            navigateSignUp
          }
          style={s.btn}
        >
          {signedIn && <Text style={s.btnText}>Submit Answer</Text>}
          {!signedIn && <Text style={s.btnText}>Sign Up to Submit Answer</Text>}
        </Touchable>
        }

        {isPublishing && <ActivityIndicator size="large" color={colors.mainColor} style={s.indicator} /> }
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
  isPublishing: T.bool,
  signedIn: T.bool,
  question: T.object,
  isLoading: T.bool,
  getAnswers: T.func,
  id: T.string,
  answers: T.array,
  isLoadingMore: T.bool,
  getAnswersMore: T.func,
  hasNoMore: T.bool,
  publishAnswer: T.func,
  description: T.string,
  onChange: T.func,
  navigateSignUp: T.func,
};

export default QuestionScreen;
