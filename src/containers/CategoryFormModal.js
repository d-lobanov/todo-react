import {connect} from "react-redux";
import CategoryModal from "../components/CategoryModal";
import {message} from "antd";
import {createCategory, updateCategory, toggleModal} from "../actions";

const mapStateToProps = state => {
  const {data = {}, visible = false} = state.modals["CATEGORY_FORM"] || {};

  return {...data, isNew: !data.id, visible};
};

const mapDispatchToProps = dispatch => ({
  onCreate: (title, parent) => {
    dispatch(createCategory(title, parent));
    dispatch(toggleModal("CATEGORY_FORM"));

    message.success("Category was created");
  },
  onUpdate: (id, title) => {
    dispatch(updateCategory(id, title));
    dispatch(toggleModal("CATEGORY_FORM"));

    message.success("Category was updated");
  },
  onClose: () => {
    dispatch(toggleModal("CATEGORY_FORM"));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
