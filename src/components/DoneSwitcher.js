import React from "react";
import {Button} from "antd";
import PropTypes from "prop-types";

const DoneSwitcher = ({onToggle, showDone}) => (
  <Button onClick={onToggle} className="btn-show-done">{showDone ? "Hide done" : "Show done"}</Button>
);

DoneSwitcher.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showDone: PropTypes.bool.isRequired
};

export default DoneSwitcher;
