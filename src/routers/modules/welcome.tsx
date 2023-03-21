import {HomeOutlined} from "@ant-design/icons";
import lazyLoad from "../lazyLoad";
import React, {lazy} from "react";
import {MenuRouteObject} from "../router";

const welcome: MenuRouteObject = {
    path: "index",
    label: "首页",
    icon: <HomeOutlined />,
    element: lazyLoad(lazy(() => import("../../pages/Welcome")))
}

export default welcome