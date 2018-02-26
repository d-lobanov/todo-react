import React, {Component} from "react";
import PropTypes from "airbnb-prop-types";
import {Progress} from "antd";

class ProgressBar extends Component {
  state = {
    showInfo: false
  };

  render() {
    const {all, completed} = this.props;
    const showInfo = this.state.showInfo;
    const percent = all > 0 ? completed * 100 / all : 0;

    return <Progress percent={percent} format={() => `Done ${completed} of ${all}`}
                     showInfo={showInfo} onClick={() => this.setState({showInfo: !showInfo})}/>;
  }
}

ProgressBar.propTypes = {
  all: PropTypes.nonNegativeInteger.isRequired,
  completed: PropTypes.nonNegativeInteger.isRequired,
};

export default ProgressBar;
