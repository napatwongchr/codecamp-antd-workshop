import React from "react";
import { Row, Col, Button, Select, Input } from "antd";

const { Option } = Select;
const { TextArea } = Input;

function CartDetail() {
  return (
    <Row justify="center">
      <Col span="16">
        <Row style={{ margin: "20px 0" }}>
          <Col
            span="12"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2>1 Item in your cart</h2>
          </Col>
          <Col
            span="12"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button type="primary">Keep Shopping</Button>
          </Col>
        </Row>
        <Row>
          <Col
            span="24"
            style={{
              backgroundColor: "white",
              padding: 20,
              border: "1px solid hsl(0, 0%, 90%)",
            }}
          >
            <Row>
              <Col
                span={16}
                style={{
                  paddingRight: 10,
                  borderRight: "1px solid hsl(0, 0%, 90%)",
                }}
              >
                <Row gutter={[0, 10]} justify="space-between">
                  <Col span={12}>
                    <span>CODECAMP Shop</span>
                  </Col>
                  <Col
                    span={12}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <span>Contact Shop</span>
                  </Col>
                </Row>
                <Row gutter={[20, 30]}>
                  <Col flex="1">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="product 1"
                    />
                  </Col>
                  <Col flex="2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce in ligula odio. Phasellus tortor diam, cursus in
                    egestas id, laoreet vitae ligula. Morbi in luctus neque. Sed
                    pretium est quis ultricies sagittis. Interdum
                  </Col>
                  <Col flex="2">
                    <Select
                      defaultValue="lucy"
                      style={{ width: 120 }}
                      onChange={() => {}}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>
                  <Col flex="50px">
                    <span>123.23</span>
                  </Col>
                </Row>
                <Row gutter={[0, 30]}>
                  <Col span="12">
                    <TextArea placeholder="Add an optional note to seller" />
                  </Col>
                  <Col
                    span="12"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span>Ready to ship in 1-3 business days</span>
                    <span>from United Kingdom</span>
                  </Col>
                </Row>
              </Col>
              <Col
                span={8}
                style={{
                  paddingLeft: 10,
                }}
              >
                Exercise
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CartDetail;
