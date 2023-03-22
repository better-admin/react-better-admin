import React, {useContext, useState} from 'react';
import {Avatar, Badge, Card, ConfigProvider, Dropdown, Input, Menu, MenuProps, Space, TabPaneProps, Tabs} from 'antd';
import {getFirstChildPathByParent, useMenuItems} from "../../routers/router";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import styles from "../Portal/portal.module.scss";
import {
    BellOutlined, ExportOutlined, GithubOutlined, MoreOutlined,
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

interface Tab extends Omit<TabPaneProps, 'tab'> {
    key: string;
    label: React.ReactNode;
}

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

    const avatarItems: MenuProps['items'] = [
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

    const notifyItems: Tab[] = [
        {
            label: "待办事项",
            key: "11",
            children: <>
                <p>这里自定义 待办事项 的内容</p>
                <p>这里自定义 待办事项 的内容</p>
                <p>这里自定义 待办事项 的内容</p>
                <p>这里自定义 待办事项 的内容</p>
            </>,
        },
        {
            label: "系统通知",
            key: "12",
            children: <>
                <p>这里自定义 系统通知 的内容</p>
                <p>这里自定义 系统通知 的内容</p>
                <p>这里自定义 系统通知 的内容</p>
                <p>这里自定义 系统通知 的内容</p>
            </>,
        },
        {
            label: "我的消息",
            key: "23",
            children: <>
                <p>这里自定义 我的消息 的内容</p>
                <p>这里自定义 我的消息 的内容</p>
                <p>这里自定义 我的消息 的内容</p>
                <p>这里自定义 我的消息 的内容</p>
            </>,
        }
    ]


    return (
        <Header className={styles.header}>
            <div className={styles.logo}/>
            <Space align={"center"} size={"middle"} style={{display: "flex", justifyContent: "space-between"}}>

                <Menu theme={"dark"} style={{background: "#00000000", minWidth: "500px"}} mode="horizontal"
                      defaultSelectedKeys={[menuKey]}
                      items={topMenus}
                      onClick={handlerTopItemClick}
                />

                <Space align={"center"} size={"large"}
                       style={{textAlign: "right", color: "#fff"}}>
                    <Input
                        placeholder="Search ..."
                    />

                    <a href="https://github.com/better-admin/react-better-admin" target="_blank"
                       style={{color: "#fff"}}>
                        <GithubOutlined style={{fontSize: "16px"}}/>
                    </a>

                    <Dropdown menu={{items: langItems}} placement="bottom">
                        <div>
                            <TranslationOutlined style={{fontSize: "16px"}}/>
                        </div>
                    </Dropdown>

                    <Dropdown placement="bottom" dropdownRender={
                        (menu) => (
                            <div style={{
                                width: 300,
                                background: "#fff",
                                padding: "5px 10px",
                                borderRadius: "8px",
                                boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
                            }}>
                                <Tabs
                                    defaultActiveKey="1"
                                    centered
                                    items={notifyItems}
                                />
                            </div>
                        )
                    }>
                        <div>
                            <Badge count={5} size={"small"}>
                                <BellOutlined style={{fontSize: "16px", color: "#fff"}}/>
                            </Badge>
                        </div>
                    </Dropdown>

                    <Dropdown menu={{items: avatarItems}} placement="bottomRight">
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