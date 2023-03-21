import React, {useMemo} from 'react';
import {Breadcrumb} from 'antd';
import {getBreadcrumbs} from "../../routers/router";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

/**
 * 面包屑组件
 * @constructor
 */
const Breadcrumbs: React.FC = () => {

    const {t, i18n} = useTranslation();
    let {pathname} = useLocation();

    const breadcrumbs = useMemo(() => getBreadcrumbs(t, pathname)
        , [i18n.language, pathname]);

    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbs.map((value) => {
                return <Breadcrumb.Item>{value}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    );
};


export default Breadcrumbs;