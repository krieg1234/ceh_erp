import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';
import { Task } from '../classes/Task';

const defaultTasks = {
  byId: {},
  allTasks: [],
};
const tasks = handleActions(
  {
    [actions.createTask]: (state, { payload }) => {
      const task = new Task(
        payload.blueprint,
        payload.order,
        payload.basisOfOrder,
        payload.type,
        payload.master
      );
      const taskId = task.getId();
      return {
        byId: {
          ...state.byId,
          [taskId]: task,
        },
        allTasks: [...state.allTasks, taskId],
      };
    },
    [actions.editTask]: (state, { payload }) => {
      const taskId = payload.id;
      state.byId[taskId].setData(payload);
      return {
        ...state,
      };
    },
  },
  defaultTasks
);

export default tasks;
