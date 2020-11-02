import React from "react";
import { Row, Col } from "antd";

function SubMenu() {
  return (
    <Row
      justify="center"
      style={{
        borderBottom: "1px solid hsl(0, 0%, 90%)",
        backgroundColor: "white",
      }}
    >
      <Col
        span="16"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            padding: "10px 0px",
          }}
        >
          {subMenus.map((menu, index) => {
            const isFirst = index === 0;
            return (
              <li
                key={index}
                style={{
                  color: "hsl(0, 0%, 50%)",
                  marginLeft: isFirst ? 0 : 20,
                  listStyleType: "none",
                }}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
}

const subMenus = [
  {
    name: "Clothing & Accessories",
  },
  {
    name: "Jewelry",
  },
  {
    name: "Craft Supplies & Tools",
  },
  {
    name: "Weddings",
  },
  {
    name: "Entertainment",
  },
  {
    name: "Home & Living",
  },
  {
    name: "Kids & Baby",
  },
  {
    name: "Vintage",
  },
];

export default SubMenu;
