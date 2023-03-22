import {createBrowserRouter, RouteObject} from "react-router-dom";
import CheckLogin from "../components/CheckLogin";
import Error404 from "../pages/Error404";
import React from "react";
import { PieChartOutlined} from "@ant-design/icons";
import {MenuProps} from "antd";
import {useTranslation} from "react-i18next";
import Portal from "../layout/Portal";
import welcome from "./modules/welcome";
import system from "./modules/system";
import front from "./front/front";
import user from "./modules/user";
import test from "./modules/test";


export declare type MenuRouteObject ={
    icon?: React.ReactNode;
    label?: string;
    children?: MenuRouteObject[] | null;
} &  RouteObject;


/**
 * 登录成功之后的路由和菜单配置
 */
const portalRouters: MenuRouteObject[] = [
    {...welcome},
    {...user},
    {...system},
    {...test},
]


/**
 * 全部路由
 */
const routers: MenuRouteObject[] = [
    {
        path: "/",
        element: <CheckLogin><Portal/></CheckLogin>,
        errorElement: <Error404/>,
        icon: <PieChartOutlined/>,
        children: portalRouters,
    },
    ...front
];

export type MenuItem = Required<MenuProps>['items'][number] & { children?: MenuItem[] | null };

const createMenuItems = (routers: MenuRouteObject[] | undefined, key: string, t: Function, topMenuOnly?: boolean): MenuItem[] => {
    return routers ? routers.map(item => {
        return {
            key: key + processPath(item.path),
            icon: item.icon,
            children: !topMenuOnly && item.children ? createMenuItems(item.children, key + processPath(item.path), t, false) : null,
            label: t(item.label || item.path),
        } as MenuItem;

    }) : [];
};


const processPath = (path: string | undefined): string => {
    if (path) {
        if (path.lastIndexOf("/") == path.length - 1) path = path.substring(0, path.length - 1);
        if (path.indexOf("/") != 0) path = "/" + path;
    }
    return path ? path : "";
}


const useMenuItems = (topMenuOnly?: boolean): MenuItem[] => {
    const {t} = useTranslation();
    return createMenuItems(routers[0].children, "", t, topMenuOnly);
}


const useChildMenuItems = (pathname: string): MenuItem[] | null => {
    const {t} = useTranslation();

    pathname = processPath(pathname);

    let matchedRouter;
    for (let router of routers[0].children!) {
        const searchString = processPath(router.path);
        if (searchString === pathname || pathname.startsWith(searchString + "/")) {
            matchedRouter = router;
            break
        }
    }

    return matchedRouter ?  createMenuItems(matchedRouter.children, processPath(matchedRouter.path), t, false) : null;
}


const getFirstChildPathByParent = (pathname: string): string | null => {
    for (let router of routers[0].children!) {
        const searchString = processPath(router.path);
        if (searchString === pathname || pathname.startsWith(searchString + "/")) {
            if (router.children && router.children.length > 0) {
                return searchString + processPath(router.children[0].path);
            }
        }
    }

    return null;
}
const getBreadcrumbs = (t: Function, pathname: string): string[] => {
    let breadcrumbs: string[] = [];
    let tempRouters: MenuRouteObject[] = routers[0].children!;
    let matchedPath = "";
    while (tempRouters) {
        let isMatchedRouters = false;
        for (let router of tempRouters) {
            const routerPath = matchedPath + processPath(router.path);
            if (routerPath === pathname || pathname.startsWith(routerPath + "/")) {
                breadcrumbs.push(t(router.label || router.path!))
                matchedPath = routerPath;
                isMatchedRouters = true;
                tempRouters = router.children as MenuRouteObject[]
                break
            }
        }
        if (!isMatchedRouters) {
            break;
        }
    }
    return breadcrumbs;
}

const router = createBrowserRouter(routers);
export {useMenuItems, useChildMenuItems, getBreadcrumbs, getFirstChildPathByParent, router}