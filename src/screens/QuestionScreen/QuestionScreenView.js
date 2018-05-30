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
  loadingError,
  loadingMoreError,
  question,
  answers,
  id,
  publishAnswer,
  onChange,
  description,
  navigateSignUp,

  createdAt,
  tags,
  title,
}) => (
  <KeyboardAwareScrollView
    contentContainerStyle={s.container}
    keyboardShouldPersistTaps="handled"
  >
    <View style={s.top}>
      <QuestionItem
        question={question}
        id={id}
        createdAt={createdAt}
        tags={tags}
        title={title}
      />
  
      <AnswersList
        answers={answers}
        id={id}
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
  id: T.string,
  loadingMoreError: T.bool,
  answers: T.array,
  publishAnswer: T.func,
  description: T.string,
  onChange: T.func,
  navigateSignUp: T.func,
  loadingError: T.bool,

  createdAt: T.string,
  tags: T.array,
  title: T.string,
};

export default QuestionScreen;
