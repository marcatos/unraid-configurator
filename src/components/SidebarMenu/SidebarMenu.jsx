import { Menu } from "antd";
import React from "react";
import { CloudServerOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "main",
    label: <Link to={"/arrs"}>Arrs</Link>,
    icon: React.createElement(CloudServerOutlined),
    children: [
      {
        key: "setup",
        label: <Link to={"/arrs/setup"}>Setup</Link>,
      },
    ],
  },
];

const SidebarMenu = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%" }}
      items={menuItems}
    />
  );
};

export default SidebarMenu;
