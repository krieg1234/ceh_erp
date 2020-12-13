import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
  callEditTaskForm,
  sortTaskList,
  switchTaskForm,
} from '../actions/actions';
import sortIcon from '../resources/caret-bottom.svg';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

class TaskList extends React.Component {
  editTaskHandler = (e) => {
    const { dispatch } = this.props;
    const id = e.currentTarget.cells[0].innerText;
    dispatch(switchTaskForm());
    dispatch(callEditTaskForm(this.props.tasks.byId[id]));
  };

  sortTaskListHandler = (field) => () => {
    const { dispatch } = this.props;
    dispatch(sortTaskList({ field }));
  };

  render() {
    const { byId, allTasks } = this.props.tasks;
    return (
      <Table bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              id
              <img src={sortIcon} onClick={this.sortTaskListHandler('id')} />
            </th>
            <th>
              Шифр
              <img
                src={sortIcon}
                onClick={this.sortTaskListHandler('blueprint')}
              />
            </th>
            <th>
              Заказ
              <img src={sortIcon} onClick={this.sortTaskListHandler('order')} />
            </th>
            <th>
              Основание
              <img
                src={sortIcon}
                onClick={this.sortTaskListHandler('basisOfOrder')}
              />
            </th>
            <th>
              Тип
              <img src={sortIcon} onClick={this.sortTaskListHandler('type')} />
            </th>
            <th>
              Мастер
              <img
                src={sortIcon}
                onClick={this.sortTaskListHandler('master')}
              />
            </th>
            <th>
              Дата запуска
              <img
                src={sortIcon}
                onClick={this.sortTaskListHandler('launchDate')}
              />
            </th>
            <th>
              Дата сдачи
              <img
                src={sortIcon}
                onClick={this.sortTaskListHandler('completionDate')}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {allTasks.map((taskId) => {
            const {
              id,
              blueprint,
              order,
              basisOfOrder,
              type,
              master,
              launchDate,
              completionDate,
            } = byId[taskId].getData();
            return (
              <tr key={id} onClick={this.editTaskHandler}>
                <td>{id}</td>
                <td>{blueprint}</td>
                <td>{order}</td>
                <td>{basisOfOrder}</td>
                <td>{type}</td>
                <td>{master}</td>
                <td>{launchDate}</td>
                <td>{completionDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
