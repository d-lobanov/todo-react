import React from "react";
import PropTypes from "prop-types";
import {Checkbox, Icon} from "antd";
import {Link} from "react-router-dom";

const MAX_TITLE_LENGTH = 30;

const truncateTitle = title => `${title.substring(0, MAX_TITLE_LENGTH)}${title.length > MAX_TITLE_LENGTH ? "..." : ""}`;

const Todo = ({onClick, title, completed, id}) => (
  <li>
    <Checkbox onChange={onClick} checked={completed}/>
    <span style={{"textDecoration": completed ? "line-through" : ""}}
          onDoubleClick={onClick}>{truncateTitle(title)}</span>
    <Link to={`/todo/${id}`}><Icon type="edit"/></Link>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Todo;
