import React, {useContext, useState} from 'react';
import {Avatar, ConfigProvider, Dropdown, Input, Menu, MenuProps, Space} from 'antd';
import {getFirstChildPathByParent, useMenuItems} from "../../routers/router";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import styles from "../Portal/portal.module.scss";
import {
    BellOutlined, ExportOutlined, MoreOutlined,
    QuestionCircleOutlined,
    SearchOutlined, SettingOutlined,
    TranslationOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";

import type {Locale} from 'antd/es/locale';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {useAppDispatch} from "../../store/hooks";
import {setLocale} from "../../store/slices/appGlobalSlice";
import {SettingsContext} from "../../context/settings";
import {loggedOut} from "../../store/slices/authSlice";


/**React
 * 头部
 * @constructor
 */
const MyHeader: React.FC = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const topMenus = useMenuItems(true);
    let menuKey: string = '';
    for (let topMenu of topMenus) {
        if (pathname.startsWith(topMenu!.key + "/") || pathname === topMenu!.key) {
            menuKey = topMenu!.key as string;
        }
    }



    const {t, i18n} = useTranslation();


    function handlerTopItemClick(item: { key: string }) {
        const firstChildPath = getFirstChildPathByParent(item.key);
        navigate(firstChildPath ? firstChildPath : item.key);
    }

    const {setLocale} = useContext(SettingsContext);
    const handlerChangeLang = (e: { key: string }) => {
        i18n.changeLanguage(e.key)
        dayjs.locale(e.key);
        setLocale(e.key === "en" ? enUS : zhCN)
    }


    const langItems: MenuProps['items'] = [
        {
            key: 'zh',
            label: "简体中文",
            onClick: handlerChangeLang
        },
        {
            key: 'en',
            label: "English",
            onClick: handlerChangeLang
        },
    ];

    const dispatch = useAppDispatch();
    const handlerUserMenus = (item: { key: string }) => {
        if (item.key === "loggedOut") {
            dispatch(loggedOut())
            navigate("/login")
        }
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <><UserOutlined/> 个人中心</>,
        },
        {
            key: '2',
            label: <> <SettingOutlined/> 个人设置</>,
        },
        {
            type: 'divider',
        },
        {
            key: 'loggedOut',
            label: <>  <ExportOutlined/> 退出登录</>,
            onClick: handlerUserMenus
        },
    ];

    return (
        <Header className={styles.header}>
            <div className={styles.logo}/>
            <Space align={"center"} size={"middle"}
                   style={{display: "flex", justifyContent: "space-between"}}>

                <Menu theme={"dark"} style={{background: "#00000000",}} mode="horizontal"
                    defaultSelectedKeys={[menuKey]}
                    //   selectedKeys={[selectKey]}
                      items={topMenus} onClick={handlerTopItemClick}/>

                <Space align={"center"} size={"large"}
                       style={{textAlign: "right", color: "#fff"}}>
                    <Input
                        placeholder="Search ..."
                    />
                    {/*<QuestionCircleOutlined style={{fontSize: "16px"}}/>*/}
                    {/*<SearchOutlined style={{fontSize: "16px"}}/>*/}



                    <Dropdown menu={{items: langItems} as MenuProps} placement="bottom">
                        <div>
                            <TranslationOutlined style={{fontSize: "16px"}}/>
                        </div>
                    </Dropdown>

                    <BellOutlined style={{fontSize: "16px"}}/>

                    <Dropdown menu={{items}} placement="bottomRight">
                        <div style={{fontSize: "14px"}}>
                            <Avatar icon={<UserOutlined/>}/> Michael Yang
                        </div>
                    </Dropdown>




                    <MoreOutlined style={{fontSize: "18px"}}/>
                </Space>

            </Space>

        </Header>
    );
};


export default MyHeader;