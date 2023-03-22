import {
    DesktopOutlined,
    FontSizeOutlined,
    FundOutlined,
    FundViewOutlined, GoldOutlined,
    HddOutlined,
    HighlightOutlined,
    InfoCircleOutlined,
    MinusCircleOutlined,
    PieChartOutlined,
    SettingOutlined,
    UnorderedListOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
import lazyLoad from "../lazyLoad";
import React, {lazy} from "react";
import {MenuRouteObject} from "../router";
import Page2 from "../../pages/Page2";

const system: MenuRouteObject = {
    path: "system",
    label: "系统管理",
    icon: <SettingOutlined />,
    children: [
        {
            path: "page1",
            label: "系统参数",
            icon: <UnorderedListOutlined />,
            element: lazyLoad(lazy(() => import("../../pages/Page1")))
        },
        {
            path: "dict",
            label: "数据字典",
            icon: <FontSizeOutlined />,
            element: <Page2/>
        },
        {
            path: "log",
            label: "日志管理",
            icon:<InfoCircleOutlined />,
            // element: <Page3/>,
            // element: <CheckLogin><Portal/></CheckLogin>,
            children:[
                {
                    path: "action",
                    label: "操作日志",
                    icon: <HighlightOutlined />,
                    element: <Page2/>
                },
                {
                    path: "login",
                    label: "登录日志",
                    icon: <DesktopOutlined/>,
                    element: <Page2/>
                },
            ]
        },
        {
            label: "系统监控",
            icon: <FundOutlined />,
            children:[
                {
                    path: "users",
                    label: "在线用户",
                    icon: <UserSwitchOutlined />,
                    element: <Page2/>
                },
                {
                    path: "server",
                    label: "服务器信息",
                    icon: <HddOutlined />,
                    element: <Page2/>
                },
                {
                    path: "redis",
                    label: "Redis信息",
                    icon: <FundViewOutlined />,
                    element: <Page2/>
                },
                {
                    path: "caches",
                    label: "Redis缓存",
                    icon: <GoldOutlined />,
                    element: <Page2/>
                },
            ]
        }
    ]
}
export default system