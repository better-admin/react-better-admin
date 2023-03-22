import {
    BgColorsOutlined,
    DesktopOutlined, FileDoneOutlined,
    FontSizeOutlined,
    FundOutlined,
    FundViewOutlined, GoldOutlined,
    HddOutlined,
    HighlightOutlined,
    InfoCircleOutlined,
    SettingOutlined,
    UnorderedListOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
import lazyLoad from "../lazyLoad";
import React, {lazy} from "react";
import {MenuRouteObject} from "../router";
import Page2 from "../../pages/Page2";
import Error403 from "../../pages/Error403";
import Error404 from "../../pages/Error404";

const system: MenuRouteObject = {
    path: "system",
    label: "系统管理",
    icon: <SettingOutlined/>,
    children: [
        {
            path: "page1",
            label: "系统参数",
            icon: <UnorderedListOutlined/>,
            element: lazyLoad(lazy(() => import("../../pages/Page1")))
        },
        {
            path: "dict",
            label: "数据字典",
            icon: <FontSizeOutlined/>,
            element: <Page2/>
        },
        {
            path: "log",
            label: "日志管理",
            icon: <InfoCircleOutlined/>,
            children: [
                {
                    path: "action",
                    label: "操作日志",
                    icon: <HighlightOutlined/>,
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
            path: "monitor",
            icon: <FundOutlined/>,
            children: [
                {
                    path: "users",
                    label: "在线用户",
                    icon: <UserSwitchOutlined/>,
                    element: <Page2/>
                },
                {
                    path: "server",
                    label: "服务器信息",
                    icon: <HddOutlined/>,
                    element: <Page2/>
                },
                {
                    path: "redis",
                    label: "Redis信息",
                    icon: <FundViewOutlined/>,
                    element: <Page2/>
                },
                {
                    path: "caches",
                    label: "Redis缓存",
                    icon: <GoldOutlined/>,
                    element: <Page2/>
                },
            ]
        },
        {
            label: "开发示例",
            path: "dev",
            icon: <BgColorsOutlined/>,
            children: [
                {
                    path: "403",
                    label: "403 页面",
                    icon: <FileDoneOutlined/>,
                    element: <Error403/>
                },
                {
                    path: "404",
                    label: "404 页面",
                    icon: <FileDoneOutlined/>,
                    element: <Error404/>
                },
            ]
        }
    ]
}
export default system