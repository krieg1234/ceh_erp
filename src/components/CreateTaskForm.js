import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  createTask,
  editTask,
  inputCreateTaskForm,
  switchTaskForm,
} from '../actions/actions';

const mapStateToProps = (state) => {
  const props = {
    taskFormShow: state.UI.taskFormShow,
    taskFormInputs: state.UI.taskFormInputs,
    submitButtonText: state.UI.taskFormSubmitButtonText,
    labelText: state.UI.taskFormLabelText,
    activeTaskId: state.UI.activeTaskId,
  };
  return props;
};

class CreateTaskForm extends Component {
  hideCreateTaskFormHandler = () => {
    const { dispatch } = this.props;
    dispatch(switchTaskForm());
  };

  inputHandler = (field) => (e) => {
    // this.setState({ [field]: e.target.value });
    const { dispatch } = this.props;
    dispatch(inputCreateTaskForm({ field, value: e.target.value }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { dispatch } = this.props;
    if (this.props.activeTaskId) {
      dispatch(
        editTask({ ...this.props.taskFormInputs, id: this.props.activeTaskId })
      );
    } else {
      dispatch(createTask(this.props.taskFormInputs));
    }
    dispatch(switchTaskForm());
  };
  render() {
    return (
      <Modal
        show={this.props.taskFormShow}
        onHide={this.hideCreateTaskFormHandler}
      >
        <Modal.Title className="text-center">
          {this.props.labelText}
        </Modal.Title>
        <Form className="m-5" onSubmit={this.submitHandler}>
          <Form.Group controlId="blueprint">
            <Form.Label>Шифр чертежа:</Form.Label>
            <Form.Control
              type="blueprint"
              onChange={this.inputHandler('blueprint')}
              value={this.props.taskFormInputs.blueprint}
            />
          </Form.Group>

          <Form.Group controlId="order">
            <Form.Label>Заказ:</Form.Label>
            <Form.Control
              type="order"
              onChange={this.inputHandler('order')}
              value={this.props.taskFormInputs.order}
            />
          </Form.Group>

          <Form.Group controlId="basisOfOrder">
            <Form.Label>Основание запуска:</Form.Label>
            <Form.Control
              type="basisOfOrder"
              onChange={this.inputHandler('basisOfOrder')}
              value={this.props.taskFormInputs.basisOfOrder}
            />
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Тип работы:</Form.Label>
            <Form.Control
              type="type"
              onChange={this.inputHandler('type')}
              value={this.props.taskFormInputs.type}
            />
          </Form.Group>

          <Form.Group controlId="master">
            <Form.Label>Ответственный мастер:</Form.Label>
            <Form.Control
              type="master"
              onChange={this.inputHandler('master')}
              value={this.props.taskFormInputs.master}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {this.props.submitButtonText}
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(CreateTaskForm);
