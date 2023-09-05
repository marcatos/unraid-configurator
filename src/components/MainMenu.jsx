import { Menu } from "antd";
import React from "react";

const items = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "arrs",
    label: "Arrs",
    href: "/arrs",
  },
  {
    key: "arrs",
    label: "Arrs",
    href: "/arrs",
  },

  {
    key: "patreon",
    label: (
      <a href="https://patreon.com/UnraidConfigurator" target="_blank">
        Support me on Patreon
      </a>
    ),
  },
];
const MainMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      items={items}
    />
  );
};

export default MainMenu;
