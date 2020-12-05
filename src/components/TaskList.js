import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

class TaskList extends React.Component {
  state = {};
  render() {
    const { tasks } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Шифр</th>
            <th>Заказ</th>
            <th>Основание</th>
            <th>Тип</th>
            <th>Мастер</th>
            <th>Дата запуска</th>
            <th>Дата сдачи</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
