import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import s from './style';
import AnswersList from './components/AnswersList';
import { TextInput, Touchable, LoadingIndicator } from '../../components';
import QuestionItem from './components/QuestionItem';


const QuestionScreen = ({
  isPublishing,
  signedIn,
  isLoading,
  isLoadingMore,
  loadingError,
  loadingMoreError,
  hasNoMore,
  question,
  answers,
  id,
  getAnswers,
  getAnswersMore,
  publishAnswer,
  onChange,
  description,
  navigateSignUp,
}) => (
  <KeyboardAwareScrollView
    contentContainerStyle={s.container}
    keyboardShouldPersistTaps="handled"
  >
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
        id={id}
        getAnswersMore={getAnswersMore}
        loadingMoreError={loadingMoreError}
        loadingError={loadingError}
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

        {isPublishing &&
        <LoadingIndicator style={s.indicator} />
        }
      </View>
    </View>
  </KeyboardAwareScrollView>
);


QuestionScreen.propTypes = {
  isPublishing: T.bool,
  signedIn: T.bool,
  question: T.object,
  isLoading: T.bool,
  getAnswers: T.func,
  id: T.string,
  loadingMoreError: T.bool,
  answers: T.array,
  isLoadingMore: T.bool,
  getAnswersMore: T.func,
  hasNoMore: T.bool,
  publishAnswer: T.func,
  description: T.string,
  onChange: T.func,
  navigateSignUp: T.func,
  loadingError: T.bool,
};

export default QuestionScreen;
