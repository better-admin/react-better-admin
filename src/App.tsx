import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./routers/router";

import {setupStore} from "./store/store";

import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, {useState} from 'react';
import {App as AntdApp, ConfigProvider} from "antd";
import {SettingsContext} from "./context/settings";
import {Locale} from "antd/es/locale";

dayjs.locale('zh');

function App() {

    const [lang, setLang] = useState<Locale>(zhCN);

    const settings = {
        setLocale: (locale: Locale) => {
            setLang(locale)
        }
    };

    const store = setupStore();

    return (
        <Provider store={store}>
            <SettingsContext.Provider value={settings}>
                <ConfigProvider locale={lang}>
                    <AntdApp>
                        <RouterProvider router={router}/>
                    </AntdApp>
                </ConfigProvider>
            </SettingsContext.Provider>
        </Provider>
    )
}

export default App
