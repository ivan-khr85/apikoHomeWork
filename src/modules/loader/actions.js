import { questionTypes } from './';

const setLoader = (value, name) => ({
  type: questionTypes.SET_LOADER,
  value,
  name,
});

const createQuestion = (db, document, history) => dispatch => {
  dispatch(setLoader(true, questionTypes.CREATE_QUESTION));
  setTimeout(() => {
    db.questions.insert(document);

    dispatch(setLoader(false, questionTypes.CREATE_QUESTION));
    history.push('/');
  }, 1000);
};

export default { setLoader, createQuestion };
