import React from 'react';
import Task from './Task';

function TasksList(props) {
  const active = props.tasks.filter((task) => task.active);
  active.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  const done = props.tasks.filter((task) => !task.active);
  done.sort((a, b) => b.finishDate - a.finishDate);
  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));

  return (
    <>
      <div className='active'>
        <h1>Zadannnia do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Nie masz nic do roboty</p>}
      </div>
      <hr />
      <div className='active'>
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: 10 }}>wyświetlone jest jedynie 5 ostatnich elementów</span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}

export default TasksList;
