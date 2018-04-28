import { countChangeTypes } from './';

const countUp = value => ({
  type: countChangeTypes.COUNT_UP,
  value
});

const countDown = value => ({
  type: countChangeTypes.COUNT_DOWN,
  value
});

export default {
  countUp,
  countDown,
};