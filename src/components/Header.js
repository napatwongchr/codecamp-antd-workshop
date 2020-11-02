import React from "react";
import { Row, Col, Input } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  AliwangwangOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import logo from "../images/LogoMakr.png";

const { Search } = Input;

function Header() {
  return (
    <Row
      justify="center"
      style={{
        borderBottom: "1px solid hsl(0, 0%, 90%)",
        backgroundColor: "white",
      }}
    >
      <Col
        span="8"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="product logo" width="100px" height="90px" />
        <Search
          style={{
            marginLeft: 20,
            width: 400,
          }}
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={() => {}}
        />
      </Col>
      <Col
        span="8"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
          }}
        >
          {mainMenus.map((menu, index) => {
            const isLast = mainMenus.length - 1 === index;
            return (
              <li
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  listStyleType: "none",
                  borderRight: isLast ? "" : "1px solid hsl(0, 0%, 90%)",
                  paddingRight: isLast ? 0 : 20,
                  marginRight: isLast ? 0 : 20,
                  cursor: "pointer",
                }}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
}

const mainMenus = [
  {
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    name: "Favorites",
    icon: <HeartOutlined />,
  },
  {
    name: "You",
    icon: <AliwangwangOutlined />,
  },
  {
    name: "Cart",
    icon: <ShoppingCartOutlined />,
  },
];

export default Header;
