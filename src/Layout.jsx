import { /*Breadcrumb,*/ Menu, theme, Layout as AntLayout } from "antd";
import React from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

const { Header, Content, Footer, Sider } = AntLayout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Layout = (props) => {
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntLayout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/*<Breadcrumb style={{ margin: "16px 0" }}>*/}
        {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}
        <AntLayout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <SidebarMenu />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </AntLayout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;
