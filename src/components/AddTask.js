import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  handleChange = (e) => {
    const type = e.target.type;
    if (type === 'text' || type === 'date') {
      const value = e.target.value;
      this.setState(() => ({
        [type]: value,
      }));
    } else if (type === 'checkbox') {
      const checked = e.target.checked;
      this.setState(() => ({
        checked,
      }));
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.text.length > 2) {
      const add = this.props.add(this.state.text, this.state.date, this.state.checked);
      if (add) {
        this.setState(() => ({
          text: '',
          checked: false,
        }));
      }
    } else {
      console.log('za krótka nazwa');
    }
  };

  render() {
    const maxDate = this.state.date.slice(0, 4) * 1 + 1 + '-12-31';

    return (
      <form className='form'>
        <input
          type='text'
          placeholder='dodaj zadanie'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          type='checkbox'
          id='important'
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <label htmlFor='important'>Priorytet</label>
        <br />
        <label htmlFor='date'>Do kiedy zrobić</label>
        <input
          type='date'
          value={this.state.date}
          min={this.state.date}
          max={maxDate}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
