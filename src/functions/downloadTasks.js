import { Task } from '../classes/Task';
//фэйковый загрузчик
export const downloadTasksAsync = async () => {
  const tasks = require('../data/tasks.json');
  console.log(tasks);
  const byId = Object.keys(tasks).reduce((acc, id) => {
    const task = new Task(
      tasks[id].blueprint,
      tasks[id].order,
      tasks[id].basisOfOrder,
      tasks[id].type,
      tasks[id].master,
      tasks[id].launchDate,
      tasks[id].completionDate
    );

    return {
      ...acc,
      [task.getId()]: task,
    };
  }, {});
  const allTasks = Object.keys(byId);
  return {
    byId,
    allTasks,
  };
};
