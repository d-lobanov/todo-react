import React, {Component} from "react";
import {Tree, Button} from "antd";
import Category from "./Category";
import CategoryModal from "../containers/CategoryFormModal";
import CategoriesProgress from "../containers/CategoriesProgress";
import PropTypes from "prop-types";
import AirbnbPropTypes from "airbnb-prop-types";

const TreeNode = Tree.TreeNode;

class Categories extends Component {
  renderCategory = (id, title) => {
    const {onDelete, onEdit, onAdd} = this.props;

    return <Category title={title} selected={this.props.selected === id}
                     onDelete={() => onDelete(id)}
                     onEdit={() => onEdit(id, title)}
                     onAdd={() => onAdd(id)}/>;
  };

  renderNodes = (data) => data.map(({id, title, children}) => {
    const category = this.renderCategory(id, title);

    return <TreeNode key={id} title={category} selected={true}>{children ? this.renderNodes(children, id) : ""}</TreeNode>;
  });

  render() {
    const {onSelect, categories, selected, onAdd} = this.props;

    return (
      <div>
        <CategoriesProgress/>
        <Tree defaultExpandAll={true} onSelect={onSelect} selectedKeys={[selected.toString()]}>
          {this.renderNodes(categories)}
        </Tree>
        <Button type="default" icon="plus" onClick={() => onAdd(0)} className="btn-add-category">Add category</Button>
        <CategoryModal/>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: AirbnbPropTypes.nonNegativeInteger.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  selected: AirbnbPropTypes.nonNegativeInteger.isRequired
};

export default Categories;
