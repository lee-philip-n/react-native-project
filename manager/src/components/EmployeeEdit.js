import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {
    name,
    phone,
    shift,
  }
}

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button handlePress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>    

        <CardSection>
          <Button handlePress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>      

        <CardSection>
          <Button handlePress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>            
      </Card>
    );
  }
};

export default connect(mapStateToProps, actions)(EmployeeEdit);