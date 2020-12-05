import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { switchCreateTaskForm } from '../actions/actions';

const mapStateToProps = (state) => {
  const props = {
    createTaskFormShow: state.UI.createTaskFormShow,
  };
  return props;
};

class CreateTaskForm extends Component {
  hideCreateTaskFormHandler = () => {
    const { dispatch } = this.props;
    dispatch(switchCreateTaskForm());
  };
  render() {
    return (
      <Modal
        show={this.props.createTaskFormShow}
        onHide={this.hideCreateTaskFormHandler}
      >
        <Modal.Title className="text-center">Новое задание цеху</Modal.Title>
        <Form className="m-5">
          <Form.Group controlId="blueprint">
            <Form.Label>Шифр чертежа:</Form.Label>
            <Form.Control type="blueprint" />
          </Form.Group>
          <Form.Group controlId="order">
            <Form.Label>Заказ:</Form.Label>
            <Form.Control type="order" />
          </Form.Group>
          <Form.Group controlId="basisOfOrder">
            <Form.Label>Основание запуска:</Form.Label>
            <Form.Control type="basisOfOrder" />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Тип работы:</Form.Label>
            <Form.Control type="type" />
          </Form.Group>
          <Form.Group controlId="master">
            <Form.Label>Ответственный мастер:</Form.Label>
            <Form.Control type="master" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить задание
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(CreateTaskForm);
