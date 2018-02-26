import {connect} from "react-redux";
import DoneSwitcher from "../components/DoneSwitcher";
import {withRouter} from "react-router-dom";
import {pushQueryParam as push, getShowDone} from "../utils/query";

const mapStateToProps = (state, {location}) => ({
  showDone: getShowDone(location.search)
});

const mapDispatchToProps = (dispatch, {history, location}) => ({
  onToggle: () => {
    const current = getShowDone(location.search);

    push(history, {showDone: !current});
  }
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(DoneSwitcher));
