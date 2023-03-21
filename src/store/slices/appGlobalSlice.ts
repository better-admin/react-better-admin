import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Locale} from "antd/es/locale";
import zhCN from "antd/locale/zh_CN";

// Define a type for the slices state
export interface AppGlobalState {
    locale: Locale,
}


export const appGlobalSlice = createSlice({
    name: 'appGlobal',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        locale:zhCN
    },
    reducers: {
        setLocale: (state, action: PayloadAction<AppGlobalState>) => {
            state.locale = action.payload.locale;
        },
    }
})

export const {setLocale} = appGlobalSlice.actions


export default appGlobalSlice.reducer