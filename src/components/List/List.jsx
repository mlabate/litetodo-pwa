import React from "react";
import PropTypes from "prop-types";

import Task from '../Task';
import "./styles.scss";


const List = ({ title, listType, list }) => {

  if (!list.length) return (
    <p><em>Empty list</em></p>
  );

  return (
    <div className="lists-wrapper">
      <header className="list-header">
        <h3>{title}</h3>
        <p>
          <span>Elements: </span>
          <em>
            <strong>{list.length}</strong>
          </em>
        </p>
      </header>
      <ul className="task-list">
        {list.map((item) => (
          <Task
            key={item.key}
            listType={listType}
            item={item}
          />
          ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  listType: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object)
};

List.defaultProps = {
  listType: "todoList",
  title: "List",
  list: []
};

export default List;
