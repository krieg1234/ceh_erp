import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultUI = {
  taskFormShow: false,
  taskFormInputs: {
    blueprint: '',
    order: '',
    master: '',
    basisOfOrder: '',
    type: '',
  },
  taskFormSubmitButtonText: '',
  taskFormLabelText: '',
  activeTaskId: '',
};

const UI = handleActions(
  {
    [actions.switchTaskForm]: (state) => {
      const isShow = state.taskFormShow;
      return {
        ...state,
        taskFormShow: !isShow,
      };
    },
    [actions.inputCreateTaskForm]: (state, { payload }) => {
      return {
        ...state,
        taskFormInputs: {
          ...state.taskFormInputs,
          [payload.field]: payload.value,
        },
      };
    },
    [actions.callCreateTaskForm]: (state) => {
      return {
        ...state,
        taskFormInputs: defaultUI.taskFormInputs,
        activeTaskId: '',
        taskFormSubmitButtonText: 'Добавить задачу',
        taskFormLabelText: 'Новая задача',
      };
    },
    [actions.callEditTaskForm]: (state, { payload }) => {
      return {
        ...state,
        taskFormInputs: payload,
        activeTaskId: payload.id,
        taskFormSubmitButtonText: 'Сохранить изменения',
        taskFormLabelText: 'Редактирование задачи',
      };
    },
  },
  defaultUI
);

export default UI;
