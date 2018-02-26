import {connect} from "react-redux";
import HomePage from "../components/HomePage";
import {ActionCreators} from "redux-undo";

const mapStateToProps = ({data}) => ({
  nothingUndo: data.past.length === 0,
  nothingRedo: data.future.length === 0
});

const mapDispatchToProps = dispatch => ({
  undo: () => {
    dispatch(ActionCreators.undo());
  },
  redo: () => {
    dispatch(ActionCreators.redo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
