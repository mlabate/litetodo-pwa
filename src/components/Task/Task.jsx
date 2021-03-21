import React, {useContext, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Archive, Circle, CheckCircle, Trash, Edit, Save } from "react-feather";
import AppContext from '../../context/AppContext';

const Task = ({
  listType,
  item,
}) => {
  const { updateTask, removeTask, handleCheck, sendToArchive } = useContext(AppContext);
  
  const element = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [task, setTask] = useState(item.name);
  const isArchived = listType === "archivedList";

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleStatus = () => {
    handleCheck(item);
  };

  const handleArchive = () => {
    sendToArchive(item, listType);
  };

  const handleRemove = () => {
    removeTask(item, listType);
  };

  const handleUpdate = () => {
    const newTask = {...item, name: task};
    updateTask(newTask, listType);
    setIsEditable(false);
  };

  useEffect(() => {
    const addTaskElement = document.querySelector('.add-task-section');
    if(isEditable) {
      element.current.focus();

      if(addTaskElement) {
        addTaskElement.classList.remove('sticky');
      }
    } else if(addTaskElement) {
        addTaskElement.classList.add('sticky');
      }
  });

  return (
    <li key={item.key} className={`task ${item.checked ? "checked" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={
            listType === "archivedList" ? () => {} : () => handleStatus(item)
          }
        />
        {!item.checked ? (
          <Circle className="check-icon" />
        ) : (
          <CheckCircle className="check-icon" />
        )}
        <input
          ref={element}
          className="edit"
          type="text"
          value={task}
          disabled={!isEditable}
          onChange={!isEditable ? () => {} : (e) => setTask(e.target.value)}
        />
      </label>
      <>
        {!isArchived && (
          <>
            <Archive
              className="material-icons icon"
              onClick={() => handleArchive(item)}
            />
            {!isEditable ? (
              <Edit
                className="material-icons icon"
                onClick={(e) => handleEdit()}
              />
            ) : (
              <Save
                className="material-icons icon"
                onClick={() => handleUpdate()}
              />
            )}
          </>
        )}
        <Trash
          className="material-icons icon"
          onClick={() => handleRemove(item)}
        />
      </>
    </li>
  );
};

Task.propTypes = {
  listType: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    key: PropTypes.string,
    checked: PropTypes.bool
  }).isRequired,
};

export default Task;