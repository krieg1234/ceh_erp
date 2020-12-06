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
    [actions.sortTaskList]: (state, { payload }) => {
      const { field } = payload;
      const sortedTaskList = state.allTasks.sort((id1, id2) => {
        const atr1 = state.byId[id1][field];
        const atr2 = state.byId[id2][field];

        if (atr1 > atr2) return 1;
        if (atr1 < atr2) return -1;
        if (atr1 == atr2) return 0;
      });
      return {
        ...state,
        allTasks: sortedTaskList,
      };
    },
  },
  defaultTasks
);

export default tasks;
