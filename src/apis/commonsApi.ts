import {createApi} from '@reduxjs/toolkit/query/react'
import myFetchQuery from "./myFetchQuery";
import {ResponseData} from "./types";

export interface DictData extends ResponseData {
    list?: {
        value: any,
        text: string
    }[]
}

export const commonsApi = createApi({
    baseQuery: myFetchQuery,
    tagTypes: [],
    reducerPath:"commonsApi",
    endpoints: (builder) => ({

        //获取数据字典的数据，直接传入数据字典 url
        getDictData: builder.query<DictData, string>({
            query: (url: string) => url,
        }),

    }),
})

// Export hooks for usage in functional components
export const {useGetDictDataQuery} = commonsApi
