import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {counterSlice} from "./slices/counterSlice";
import {authSlice} from "./slices/authSlice";

import {accountApi} from "../apis/accountApi";
import {appGlobalSlice} from "./slices/appGlobalSlice";
import {commonsApi} from "../apis/commonsApi";


// 不用自动导入，以为 RootState 无法推导 ReturnType 类型
// const slices = import.meta.glob("./slices/*.ts",{ eager: true });
// const apis = import.meta.glob("../apis/*.ts",{ eager: true });


const rootReducer = combineReducers({

    //slices
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    appGlobal: appGlobalSlice.reducer,

    //apis
    [commonsApi.reducerPath]: commonsApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,

})


export const setupStore = (preloadedState?: PreloadedState<AppState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            const defaultMiddleware = getDefaultMiddleware();
            return defaultMiddleware
                .concat(accountApi.middleware)
                .concat(commonsApi.middleware);
        },
        preloadedState,
    })
}


export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']