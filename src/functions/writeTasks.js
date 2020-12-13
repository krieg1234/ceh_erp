import { promises as fsp, writeFileSync } from 'fs';
//const { promises: fsp } = fs;

export const writeTasksAsync = async (data) => {
  const stringData = JSON.stringify(data);
  console.log(stringData);
};
