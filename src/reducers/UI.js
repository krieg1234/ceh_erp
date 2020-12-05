import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultUI = {
  createTaskFormShow: false,
};

const UI = handleActions(
  {
    [actions.switchCreateTaskForm]: (state) => {
      console.log(state.createTaskFormShow);
      const isShow = state.createTaskFormShow;
      return {
        ...state,
        createTaskFormShow: !isShow,
      };
    },
  },
  defaultUI
);

export default UI;
