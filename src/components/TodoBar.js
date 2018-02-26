import React, {Component} from "react";
import {Input, Button, Form} from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const WAIT_INTERVAL = 500;

class TodoBar extends Component {
  onSearch = value => {
    const {onSearch} = this.props;

    clearTimeout(this.timer);

    this.timer = setTimeout(() => onSearch(value), WAIT_INTERVAL);
  };

  componentWillMount() {
    this.timer = null;
  }

  onAdd = () => {
    const {form, onAdd, category, onSearch} = this.props;
    const search = form.getFieldValue("search");

    if (search) {
      onAdd(search.trim(), category);

      form.resetFields();

      clearTimeout(this.timer);
      onSearch("");
    }
  };

  render() {
    const {form, title} = this.props;

    return (
      <Form layout="inline">
        <FormItem>
          {form.getFieldDecorator("search", {initialValue: title})(
            <Input placeholder="Type to search. Enter to add" onChange={e => this.onSearch(e.target.value)}
                   onPressEnter={this.onAdd} className="search-todo"/>
          )}
        </FormItem>
        <FormItem>
          <Button type="default" icon="plus" onClick={this.onAdd}/>
        </FormItem>
      </Form>
    );
  }
}

TodoBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Form.create()(TodoBar);
