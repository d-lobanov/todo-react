import React, {Component} from "react";
import {Modal, Form, Input} from "antd";
import PropTypes from "prop-types";
import AirbnbPropTypes from "airbnb-prop-types";

const FormItem = Form.Item;

class CategoryModal extends Component {
  onOk = () => {
    const {onUpdate, onCreate, isNew, form, id, parent} = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const title = values.title.trim();

        isNew ? onCreate(title, parent) : onUpdate(id, title);
      }
    });
  };

  componentDidUpdate(prevProps) {
    const {visible, form, title} = this.props;

    if (visible && visible !== prevProps.visible) {
      form.setFieldsValue({title});
    }
  }

  render() {
    const {form, visible, onClose, title, isNew} = this.props;

    return (
      <Modal title={isNew ? "Create new category" : `Edit "${title}"`}
             visible={visible}
             onOk={this.onOk}
             onCancel={onClose}
             okText={isNew ? "Create" : "Update"}>
        <Form>
          <FormItem>
            {form.getFieldDecorator("title", {
              rules: [{
                required: true, message: "Title is required", whitespace: true
              }],
              initialValue: title
            })(
              <Input placeholder="Enter category title" onPressEnter={this.onOk} autoFocus={true}/>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

CategoryModal.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  id: AirbnbPropTypes.nonNegativeInteger,
  parent: AirbnbPropTypes.nonNegativeInteger
};

export default Form.create()(CategoryModal);
