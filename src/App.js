import { Button, Container } from 'react-bootstrap';
import './App.css';
import CreateTaskForm from './components/CreateTaskForm';
import TaskList from './components/TaskList.js';
import React, { Component } from 'react';
import {
  callCreateTaskForm,
  switchTaskForm,
  downloadTaskList,
} from './actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks.byId,
  };
  return props;
};

class App extends Component {
  callAddTaskFormHandler = () => {
    const { dispatch } = this.props;
    dispatch(callCreateTaskForm());
    dispatch(switchTaskForm());
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(downloadTaskList);
  };

  render() {
    return (
      <Container className="App">
        <h1>Задания для цеха</h1>
        <Button onClick={this.callAddTaskFormHandler}>Добавить задание</Button>
        <CreateTaskForm />
        <TaskList />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(App);
