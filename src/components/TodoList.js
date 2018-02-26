import React from "react";
import AirbnbPropTypes from "airbnb-prop-types";
import PropTypes from "prop-types";
import Todo from "./Todo";
import {Row, Col} from "antd";
import ShowDone from "../containers/ShowDoneFilter";

const TodoList = ({todos, onClick, numberOfAll}) => {
  if (numberOfAll === 0) {
    return <span>Nothing to show</span>;
  }

  return (
    <div>
      <ul style={{listStyleType: "none"}}>
        {todos.map(todo =>
          <Todo key={todo.id} onClick={() => onClick(todo.id)} {...todo}/>
        )}
      </ul>
      <Row>
        <Col span={24} offset={6}>
          <ShowDone/>
        </Col>
      </Row>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: AirbnbPropTypes.nonNegativeInteger.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoList;
