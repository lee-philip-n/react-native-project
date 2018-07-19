import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

const mapStateToProps = (state) => {
  //data we get back is an object so use lodash map function to change object to array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday, name: 'S', phone: '1234567890', id: '12345'};
  })

  return {
    employees,
  };
};

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

export default connect(mapStateToProps, actions)(EmployeeList);
