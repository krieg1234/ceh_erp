import { createAction } from 'redux-actions';

export const switchTaskForm = createAction('SWITCH_TASK_FORM');
export const createTask = createAction('CREATE_TASK');
export const editTask = createAction('EDIT_TASK');
export const inputCreateTaskForm = createAction('INPUT_CREATE_TASK_FORM');
export const callCreateTaskForm = createAction('CALL_CREATE_TASK_FORM');
export const callEditTaskForm = createAction('CALL_EDIT_TASK_FORM');
export const sortTaskList = createAction('SORT_TASK_LIST');
