import {
    DesktopOutlined,
    InsertRowRightOutlined, MenuOutlined,
    PieChartOutlined, TagsOutlined,
    TeamOutlined, ThunderboltOutlined,
    UserOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
import lazyLoad from "../lazyLoad";
import React, {lazy} from "react";
import {MenuRouteObject} from "../router";
import Page2 from "../../pages/Page2";
import Page3 from "../../pages/Page3";

const system: MenuRouteObject = {
    path: "user",
    label: "用户管理",
    icon:<UserOutlined />,
    children: [
        {
            path: "list",
            label: "用户列表",
            icon: <TeamOutlined />,
            element: lazyLoad(lazy(() => import("../../pages/Page3")))
        },
        {
            path: "dept",
            label: "部门管理",
            icon: <InsertRowRightOutlined />,
            element: <Page2/>
        },
        {
            path: "page3",
            label: "岗位管理",
            icon: <UserSwitchOutlined />,
            element: <Page3/>
        },
        {
            path: "position",
            label: "角色管理",
            icon: <TagsOutlined />,
            element: <Page3/>
        },
        {
            path: "permission",
            label: "权限管理",
            icon: <ThunderboltOutlined />,
            element: <Page3/>
        },
        {
            path: "menu",
            label: "用户菜单",
            icon: <MenuOutlined />,
            element: <Page3/>
        },
    ]
}
export default system