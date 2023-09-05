import { Menu } from "antd";
import React from "react";
import { CloudServerOutlined } from "@ant-design/icons";

const menuItems = [
  {
    key: "main",
    label: "Configurator",
    icon: React.createElement(CloudServerOutlined),
    children: [
      {
        key: "conf-arrs",
        label: "Arrs",
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
