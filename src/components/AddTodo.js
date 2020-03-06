import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
  //Example of component state
  state = {
    title: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title); //sent title to app js
    this.setState({ title: '' }); //set to default
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='add todo ...'
          value={this.state.title}
          style={{ flex: '10', padding: '5px' }}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
