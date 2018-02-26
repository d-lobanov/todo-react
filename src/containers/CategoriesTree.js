import {connect} from "react-redux";
import Categories from "../components/Categories";
import {message} from "antd";
import {withRouter} from "react-router-dom";
import {pushQueryParam as push, getCategory} from "../utils/query";
import {deleteCategory, toggleModal} from "../actions";

const mapStateToProps = ({data}, {location}) => ({
  categories: data.present.categories,
  selected: getCategory(location.search)
});

const mapDispatchToProps = (dispatch, {history}) => ({
  onSelect: id => {
    if (id.length) {
      push(history, {category: Number(id)});
    }
  },
  onDelete: id => {
    dispatch(deleteCategory(id));
    message.success("Category was removed");
  },
  onAdd: parent => {
    dispatch(toggleModal("CATEGORY_FORM", {parent}));
  },
  onEdit: (id, title) => {
    dispatch(toggleModal("CATEGORY_FORM", {id, title}));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
