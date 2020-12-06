import React from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { callEditTaskForm, switchTaskForm } from '../actions/actions';

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

  render() {
    const { byId, allTasks } = this.props.tasks;
    //const { tasks } = this.props;
    return (
      <Table bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Шифр</th>
            <th>Заказ</th>
            <th>Основание</th>
            <th>Тип</th>
            <th>Мастер</th>
            <th>Дата запуска</th>
            <th>Дата сдачи</th>
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
            console.log(byId[taskId].getData());
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
