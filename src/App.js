import { Button, Container } from 'react-bootstrap';
import './App.css';
import CreateTaskForm from './components/CreateTaskForm';
import TaskList from './components/TaskList.js';
import React, { Component } from 'react';
import { switchCreateTaskForm } from './actions/actions';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  const props = {};
  return props;
};

class App extends Component {
  callAddTaskFormHandler = () => {
    const { dispatch } = this.props;
    dispatch(switchCreateTaskForm());
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
