import {connect} from "react-redux";
import TodoEditForm from "../components/TodoEditForm";
import {updateTodo} from "../actions";
import {Form, message} from "antd";
import {withRouter} from "react-router-dom";

const mapCategory = ({id, title, children}) => ({
  key: id.toString(),
  value: id.toString(),
  label: title,
  children: children && children.map(mapCategory)
});

const mapStateToProps = ({data}, {match}) => {
  const id = Number(match.params.id);

  return {
    todo: data.present.todos.find(todo => todo.id === id),
    categories: data.present.categories.map(mapCategory),
    startTime: Date.now()
  };
};

const mapDispatchToProps = (dispatch, {match}) => ({
  onSave: todo => {
    dispatch(updateTodo({
      id: Number(match.params.id),
      ...todo
    }));

    message.success("Todo was updated");
  },
});

const WrappedTodoEditForm = Form.create()(TodoEditForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedTodoEditForm));
