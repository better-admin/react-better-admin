import React from "react";
import {Locale} from "antd/es/locale";

export const SettingsContext = React.createContext({
    setLocale:(locale:Locale)=>{}
});