import React from 'react';
import {Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import MyHeader from "../MyHeader";
import MySider from "../MySider";
import CheckPerms from "../../components/CheckPerms";

const {Content} = Layout;


const Portal: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout>
            <MyHeader/>
            <Layout>
                <MySider/>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumbs/>
                    <Content style={{
                        padding: 24,
                        margin: 0,
                        minHeight: "calc(100vh - 126px)",
                        background: colorBgContainer,
                    }}
                    >
                        <CheckPerms>
                            <Outlet/>
                        </CheckPerms>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};


export default Portal;