import React, { useState, useContext } from 'react';
import AppContext from '../../context/AppContext';

import List from '../List';

import './styles.scss';

const TodoList = () => {
  const [task, setTask] = useState("");

  const {
    state: { toDoList, doneList },
    addTask
  } = useContext(AppContext);

  const handleAdd = (listType) => {
    addTask(task, listType);
    setTask("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter") return;
    handleAdd("toDoList");
  };
  const isDisabled = task === "";

  return (
    <div className="list-view">
      <div className="add-task-section sticky">
        <h2 className="section-title">Create a task</h2>
        <div className="input-wrapper">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Write a task"
            type="text"
            name="name"
          />
          <button
            className={`add-btn ${isDisabled ? "disabled" : ""}`}
            disabled={isDisabled}
            onClick={!isDisabled ? () => handleAdd("toDoList") : () => {}}
            onKeyPress={() =>{}}
            tabIndex={0}
            type="button"
          >
            Add
          </button>
        </div>
      </div>

      <>
        {!!toDoList.length && (
          <List title="Tasks to do" listType="toDoList" list={toDoList} />
        )}
        {!!doneList.length && (
          <List title="Done tasks" listType="doneList" list={doneList} />
        )}
      </>
    </div>
  );
};

export default TodoList;
