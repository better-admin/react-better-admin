import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import {AppState} from "../store/store";


const baseUrl = `${import.meta.env.VITE_APP_SERVER_ENDPOINT}/api/`;


const delegate = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, {getState}) => {
        const jwt = (getState() as AppState).auth.jwt;
        if (!jwt) {
            //设置 Jwt 授权参数
            headers.set("Authorization", jwt as string);
        }
        return headers;
    }
});

const myFetchQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = (args, api, extraOptions) => {
    console.log(">>>>>fetch args: ", args)
    return delegate(args, api, extraOptions);
};

export default myFetchQuery;
