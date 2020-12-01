import React, { Component } from 'react';
import data from '../../helpers/data/questionData';

export default class Form extends Component {
  state = {
    answer: this.props.card?.answer || '',
    firebaseKey: this.props.card?.firebaseKey || '',
    question: this.props.card?.question || '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.firebaseKey === '') {
      data.createFlashCard(this.state)
        .then(() => {
          this.props.onUpdate();
        });
    } else {
      data.updateFlashCard(this.state)
        .then(() => {
          this.props.onUpdate(this.state.firebaseKey);
        });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Flash Card Form</h1>
        <input
          type='text'
          name='question'
          value={this.state.question}
          onChange={this.handleChange}
          placeholder='Question'
          className='form-control form-control-lg m-1'
          required
          />
        <input
          type='text'
          name='answer'
          value={this.state.answer}
          onChange={this.handleChange}
          placeholder='Answer'
          className='form-control form-control-lg m-1'
          required
          />
          <button>Submit</button>
      </form>
    );
  }
}
