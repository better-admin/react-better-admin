import {createApi} from '@reduxjs/toolkit/query/react'
import myFetchQuery from "./myFetchQuery";
import {ResponseData} from "./types";



export const accountApi = createApi({
    baseQuery: myFetchQuery,
    tagTypes: [],
    reducerPath:"accountApi",
    endpoints: (builder) => ({
        login: builder.mutation<ResponseData & { jwt: string }, { account: string, password: string }>({
            query: (body) => ({
                url: "login",
                method: 'POST',
                body,
            }),
        }),
        getAccountById: builder.query<ResponseData,void>({
            query: (n) => `account/1`,
        }),

        getAccountPermissions: builder.query<ResponseData & {permissions:string[]},void>({
            query: (n) => `account/permissions`,
        }),
    }),
})

// Export hooks for usage in functional components
export const {useLoginMutation, useGetAccountByIdQuery, useGetAccountPermissionsQuery} = accountApi
