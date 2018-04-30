import { compose, withHandlers, withState } from 'recompose';
import Button from './Component';


const enhancer = compose(
  withState('timerId', 'setTimerId', null),
  withHandlers({
    onPressIn: props => () => {
      props.setTimerId(setInterval(props.handler, 150));
    },
    onPressOut: props => () => {
      clearInterval(props.timerId);
    },
  }),
);

export default enhancer(Button);
