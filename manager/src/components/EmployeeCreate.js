import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  componentDidMount() {
    this.props.employeeUpdate({ prop: 'name', value: '' })
    this.props.employeeUpdate({ prop: 'phone', value: '' })
    this.props.employeeUpdate({ prop: 'shift', value: '' })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button handlePress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);