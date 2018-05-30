import React from 'react';
import {
  compose,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
  lifecycle,
  hoistStatics,
  setStatic,
} from 'recompose';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import CreateQuestionScreen from './CreateQuestionScreenView';
import { headerStyle, colors } from '../../styles';
import { screens } from '../../navigation';
import { DrawerButton, Touchable } from '../../components';
import { createQuestionOperations, createQuestionSelectors } from '../../modules/createQuestion';
import { navigationOperations } from '../../modules/navigation';
import s from './style';
import { AlertService } from '../../services';

const headerRight = (createQuestion, isValid, isPublishing) => (
  <View>
    {isPublishing &&
      <ActivityIndicator size="large" color={colors.mainColor} style={s.indicator} />}
    {!isPublishing &&
      <Touchable style={s.btnContainer} onPress={createQuestion} borderless>
        <Text style={[s.textBtn, isValid && s.textBtnActive]}>Send</Text>
      </Touchable>}
  </View>
);

const mapStateToProps = state => ({
  isCreatingQuestion: createQuestionSelectors.getCreationQuestionState(state),
  isCreatingQuestionError: createQuestionSelectors.getCreationQuestionErrorState(state),
});

const mapDispatchToProps = {
  createQuestion: createQuestionOperations.createQuestion,
};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    title: '',
    description: '',
    tags: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToSignIn: props => () => props.navigation.navigate(screens.SignInScreen),
    createQuestion: props => async () => {
      if (props.isValid) {
        try {
          await props.createQuestion({
            title: props.title,
            description: props.description,
            tags: props.tags,
          });
          props.navigation.dispatch(navigationOperations.navigateToHome());
        } catch (err) {
          AlertService.somethingError();
        }
      } else {
        AlertService.notValidSendData();
      }
    },
  }),
  withPropsOnChange(
    ['title', 'description', 'tags'],
    (props) => {
      const isValidTitle = (
        props.title.trim().length > 10 &&
        props.title.trim().length < 100
      );
      const isValidDescription = (
        props.description.trim().length > 20 &&
        props.description.trim().length < 5000
      );
      const isValidTags = (
        props.tags.trim().length < 100
      );
      props.onChange('isValid', isValidTags && isValidDescription && isValidTitle);
    },
  ),
  withPropsOnChange(
    ['isValid', 'isCreatingQuestion'],
    (props) => {
      props.navigation.setParams({
        headerRight: headerRight(props.createQuestion, props.isValid, props.isCreatingQuestion),
      });
    },
  ),
  lifecycle({
    componentDidMount() {
      const { createQuestion, isValid, isCreatingQuestion } = this.props;

      this.props.navigation.setParams({
        headerRight: headerRight(createQuestion, isValid, isCreatingQuestion),
      });
    },
  }),
  setStatic(
    'navigationOptions',
    ({ navigation }) => ({
      headerRight: navigation.getParam('headerRight'),
      headerLeft: (
        <DrawerButton
          onPress={() => navigation.toggleDrawer()}
          onLongPress={() => navigation.toggleDrawer()}
        />
      ),
      ...headerStyle,
    }),
  ),
);

export default hoistStatics(enhancer)(CreateQuestionScreen);
