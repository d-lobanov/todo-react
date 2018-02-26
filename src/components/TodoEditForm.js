import React, {Component} from "react";
import {Form, Input, Switch, TreeSelect, Button} from "antd";
import PropTypes from "prop-types";
import AirbnbPropTypes from "airbnb-prop-types";

const FormItem = Form.Item;
const TreeNode = TreeSelect.TreeNode;
const {TextArea} = Input;

const formItemLayout = {
  labelCol: {span: 7},
  wrapperCol: {span: 17},
};

class TodoEditForm extends Component {
  state = {
    changed: false
  };

  convertFormValues = ({title, description, category, completed}) => ({
    title: title.trim(),
    description: description.trim(),
    category: Number(category),
    completed
  });

  componentWillReceiveProps(nextProps) {
    const {form, todo} = nextProps;

    if (form.isFieldsTouched()) {
      const values = this.convertFormValues(form.getFieldsValue());

      const isChanged = todo.title !== values.title
        || todo.completed !== values.completed
        || todo.category !== Number(values.category)
        || todo.description !== values.description.trim();

      this.setState({changed: isChanged});
    }
  }

  onSave = () => {
    const {form, onSave} = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        onSave(this.convertFormValues(values));
      }
    });
  };

  renderCategories = (data) => data.map(({id, title, children}) => {
    return <TreeNode key={id} title={title} selected={true}>
      {children ? this.renderCategories(children) : ""}
    </TreeNode>;
  });

  render() {
    const {categories, form, todo} = this.props;
    const {changed} = this.state;

    return (
      <Form layout="horizontal" hideRequiredMark={true}>
        <FormItem label="Title" {...formItemLayout}>
          {form.getFieldDecorator("title", {
            rules: [{required: true, message: "Title is required", whitespace: true}],
            initialValue: todo.title
          })(
            <Input placeholder="Enter title"/>
          )}
        </FormItem>
        <FormItem label="Status" {...formItemLayout}>
          {form.getFieldDecorator("completed", {
            initialValue: todo.completed
          })(
            <Switch checkedChildren="Done" unCheckedChildren="Active" defaultChecked={todo.completed}/>
          )}
        </FormItem>
        <FormItem label="Category" {...formItemLayout}>
          {form.getFieldDecorator("category", {
            initialValue: todo.category.toString()
          })(
            <TreeSelect dropdownStyle={{maxHeight: 400, overflow: 'auto'}} treeData={categories}
                        treeDefaultExpandAll/>
          )}
        </FormItem>
        <FormItem label="Description" {...formItemLayout}>
          {form.getFieldDecorator("description", {
            initialValue: todo.description
          })(
            <TextArea placeholder="Enter description" style={{height: 100}}/>
          )}
        </FormItem>
        <FormItem className="block-save-todo">
          {changed ? '' : <span>Nothing to </span>}
          <Button type="primary" htmlType="submit" disabled={!changed} onClick={this.onSave}>Save</Button>
        </FormItem>
      </Form>
    );
  }
}

let categoryShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

categoryShape.children = PropTypes.arrayOf(categoryShape);

TodoEditForm.propTypes = {
  categories: PropTypes.arrayOf(categoryShape).isRequired,
  todo: PropTypes.shape({
    id: AirbnbPropTypes.nonNegativeInteger.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default TodoEditForm;
