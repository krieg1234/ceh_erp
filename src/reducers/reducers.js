import { combineReducers } from 'redux';
import tasks from './tasks';
import UI from './UI';

export default combineReducers({
  tasks,
  UI,
});
