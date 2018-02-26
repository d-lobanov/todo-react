import React from "react";
import {Row, Col, Icon, Layout} from "antd";
import TodoEditForm from "../containers/TodoEditForm";
import PropTypes from "prop-types";

const {Header, Content} = Layout;

const TodoEditPage = ({history}) => (
  <Layout>
    <Header>
      <Row className="header">
        <Col span={24}><h1>Natatnik</h1></Col>
      </Row>
    </Header>
    <Content>
      <Row>
        <Col span={4}>
          <span className="go-back" onClick={history.goBack}><Icon type="arrow-left"/> Go home</span>
        </Col>
        <Col span={15} offset={2}>
          <TodoEditForm />
        </Col>
      </Row>
    </Content>
  </Layout>
);

TodoEditPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  })
};

export default TodoEditPage;
