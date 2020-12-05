import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultTasks = {
  byId: {},
  allTasks: [],
};
const tasks = handleActions({}, defaultTasks);

export default tasks;
