import { onlyUpdateForKeys } from 'recompose';
import Sidebar from './Sidebar';

const enhancer = onlyUpdateForKeys(['to', 'children']);

export default enhancer(Sidebar);