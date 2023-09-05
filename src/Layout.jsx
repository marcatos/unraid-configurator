import { /*Breadcrumb,*/ theme, Layout as AntLayout } from "antd";
import React from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import MainMenu from "./components/MainMenu";

const { Header, Content, Footer, Sider } = AntLayout;

const Layout = (props) => {
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const thisYear = new Date().getFullYear();
  return (
    <AntLayout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <MainMenu />
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
        Unraid Configurator ©{thisYear} Created by{" "}
        <a href={"https://github.com/marcatos"} target={"_blank"}>
          Marcatos
        </a>{" "}
        for Unraiders
      </Footer>
    </AntLayout>
  );
};

export default Layout;
