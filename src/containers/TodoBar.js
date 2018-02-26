import {connect} from "react-redux";
import TodoBarComponent from "../components/TodoBar";
import {createTodo} from "../actions";
import {pushQueryParam as push, getCategory, getTitle} from "../utils/query";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, {location: {search}}) => ({
  category: getCategory(search),
  title: getTitle(search)
});

const mapDispatchToProps = (dispatch, {history}) => ({
  onSearch: title => {
    push(history, {title});
  },
  onAdd: (title, category) => {
    dispatch(createTodo(title, category));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoBarComponent));
