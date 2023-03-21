import React, {useMemo} from 'react';
import {Breadcrumb, Menu, theme} from 'antd';
import {getBreadcrumbs, MenuItem, useChildMenuItems, useMenuItems} from "../../routers/router";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import Sider from "antd/es/layout/Sider";

/**React
 * 侧边栏
 * @constructor
 */
const MySider: React.FC = () => {

    let {pathname} = useLocation();

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const navigate = useNavigate();
    const childMenuItems: MenuItem[] | null = useChildMenuItems(pathname);

    let selectMenuKeys: string[] = [];
    if (childMenuItems) {
        let menuItems = childMenuItems;
        while (menuItems) {
            let needMatchChildren = false;
            for (let menuItem of menuItems) {
                if (pathname.startsWith(menuItem!.key + "/") || pathname === menuItem!.key) {
                    selectMenuKeys.push(menuItem!.key as string);
                    if (menuItem.children) {
                        needMatchChildren = true;
                        menuItems = menuItem.children;
                        break;
                    }
                }
            }
            if (!needMatchChildren) {
                break;
            }
        }
    }

    function handlerItemClick(item: { key: string }) {
        navigate(item.key);
    }

    return (
        <>
            {childMenuItems && childMenuItems.length > 0 ? <Sider width={200} style={{background: colorBgContainer}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={selectMenuKeys}
                    defaultOpenKeys={selectMenuKeys}
                    style={{height: '100%', color:"#777"}}
                    items={childMenuItems}
                    onClick={handlerItemClick}
                />
            </Sider> : <div/>}
        </>

    );
};


export default MySider;