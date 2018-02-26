import React from "react";
import {Icon} from "antd";
import PropTypes from "prop-types";

const Category = ({title, selected, onDelete, onEdit, onAdd}) => {
  if (!selected) {
    return <span>{title}</span>;
  }

  return <span>
    {title}
    <Icon type="plus" onClick={onAdd}/>
    <Icon type="edit" onClick={onEdit}/>
    <Icon type="delete" onClick={onDelete}/>
  </span>;
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Category;
