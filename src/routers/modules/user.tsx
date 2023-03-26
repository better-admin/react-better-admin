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
import Page2 from "../../pages/Page3";
import Page3 from "../../pages/Page3";

const system: MenuRouteObject = {
    path: "user",
    label: "menu.user management",
    icon: <UserOutlined/>,
    children: [
        {
            path: "list",
            label: "用户列表",
            icon: <TeamOutlined/>,
            element: lazyLoad(lazy(() => import("../../pages/user/UserList")))
        },
        {
            path: "dept",
            label: "部门管理",
            icon: <InsertRowRightOutlined/>,
            element: <Page2/>
        },
        {
            path: "position",
            label: "岗位管理",
            icon: <UserSwitchOutlined/>,
            element: <Page3/>
        },
        {
            path: "role",
            label: "角色管理",
            icon: <TagsOutlined/>,
            element: <Page3/>
        },
        {
            path: "permission",
            label: "权限管理",
            icon: <ThunderboltOutlined/>,
            element: <Page3/>
        },
        {
            path: "menu",
            label: "用户菜单",
            icon: <MenuOutlined/>,
            element: <Page3/>
        },
    ] as MenuRouteObject[]
}
export default system