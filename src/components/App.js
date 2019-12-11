import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TasksList from './TasksList';

class App extends Component {
  counter = 5;

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać w Divinity: Original Sin 2',
        date: '2019-11-12',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'zrobić dobry uczynek',
        date: '2020-11-12',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'pokalować dom',
        date: '2020-11-09',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'schudnąć 5 kg',
        date: '2020-11-12',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'fryzjer!',
        date: '2020-01-07',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    // const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState(() => ({
      tasks,
    }));
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState(() => ({
      tasks,
    }));
  };

  render() {
    return (
      <div className='App'>
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TasksList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
