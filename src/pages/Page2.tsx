import React, {useState, useTransition} from "react";
import {useSelector} from "react-redux";
import {selectCount} from "../store/slices/counterSlice";
import {useTranslation} from "react-i18next";
import {Button} from "antd";

import type { Locale } from 'antd/es/locale';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

const App: React.FC = () => {
    const count = useSelector(selectCount)
    const {t, i18n} = useTranslation();

    const [locale, setLocal] = useState<Locale>(enUS);


    const changeLang = ()=>{
        setLocal(zhCN)
        dayjs.locale('en');
        i18n.changeLanguage(i18n.language=='en'?'zh':'en')
    }
    return (
        <>
            <div>{t('page2')}... {count}</div>
            <div>
                <Button onClick={()=>i18n.changeLanguage(i18n.language=='en'?'zh':'en')}>切换</Button>
            </div>
        </>
    )
}
export default App