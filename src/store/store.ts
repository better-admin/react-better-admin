import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import {counterSlice} from "./slices/counterSlice";
import {authSlice} from "./slices/authSlice";

import {accountApi} from "../apis/accountApi";
import {appGlobalSlice} from "./slices/appGlobalSlice";


// 不用自动导入，以为 RootState 无法推导 ReturnType 类型
// const slices = import.meta.glob("./slices/*.ts",{ eager: true });
// const apis = import.meta.glob("../apis/*.ts",{ eager: true });


const rootReducer = combineReducers({

    //slices
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    appGlobal: appGlobalSlice.reducer,

    //apis
    [accountApi.reducerPath]: accountApi.reducer,

})


export const setupStore = (preloadedState?: PreloadedState<AppState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(accountApi.middleware),
        preloadedState,
    })
}


export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']