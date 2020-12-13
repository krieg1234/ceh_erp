import { createAction } from 'redux-actions';
import { downloadTasksAsync } from '../functions/downloadTasks';
import { writeTasksAsync } from '../functions/writeTasks';

export const switchTaskForm = createAction('SWITCH_TASK_FORM');
export const createTask = createAction('CREATE_TASK');
export const editTask = createAction('EDIT_TASK');
export const inputCreateTaskForm = createAction('INPUT_CREATE_TASK_FORM');
export const callCreateTaskForm = createAction('CALL_CREATE_TASK_FORM');
export const callEditTaskForm = createAction('CALL_EDIT_TASK_FORM');
export const sortTaskList = createAction('SORT_TASK_LIST');

export const downloadTaskListRequest = createAction(
  'DOWNLOAD_TASK_LIST_REQUEST'
);
export const downloadTaskListSuccess = createAction(
  'DOWNLOAD_TASK_LIST_SUCCESS'
);
export const downloadTaskListFailure = createAction(
  'DOWNLOAD_TASK_LIST_FAILURE'
);

export const downloadTaskList = async (dispatch) => {
  dispatch(downloadTaskListRequest());
  try {
    const tasks = await downloadTasksAsync();
    dispatch(downloadTaskListSuccess(tasks));
  } catch (e) {
    dispatch(downloadTaskListFailure());
  }
};
