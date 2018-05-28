import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { ListHeader, TextInput } from '../../components';
import s from './style';

const CreateQuestionScreen = ({
  title,
  description,
  tags,
  onChange,
  isCreatingQuestion,
  isCreatingQuestionError,
}) => (
  <View style={s.container}>
    <ListHeader
      headerText="Create question"
      styleContainer={s.headerContainer}
    />
    <View style={s.inputContainer}>
      <TextInput
        style={[s.input, s.inputTitle]}
        placeholder=" Question title..."
        value={title}
        onChangeText={text => onChange('title', text)}
      />

      <TextInput
        multiline
        style={s.input}
        placeholder=" Type your question here..."
        value={description}
        onChangeText={text => onChange('description', text)}
      />

      <TextInput
        style={s.input}
        placeholder=" Tags separated by whitespace..."
        value={tags}
        onChangeText={text => onChange('tags', text)}
      />
    </View>
  </View>
);

CreateQuestionScreen.propTypes = {
  title: T.string,
  description: T.string,
  tags: T.string,
  onChange: T.func,
  isCreatingQuestion: T.bool,
  isCreatingQuestionError: T.bool,
};

export default CreateQuestionScreen;
