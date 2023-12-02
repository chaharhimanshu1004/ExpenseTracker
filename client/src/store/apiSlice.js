import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:6300';

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder=>({
        getCategories:builder.query({
            // get: http://localhost:6300/api/categories
            query:()=>'/api/categories',
            providesTags:['categories']
        }),
        // get Labels
        getLabels:builder.query({
            query:()=>'/api/getLabel',
            providesTags:['transaction']
        }),

        // add new Transaction
        addTransaction:builder.mutation({
            query:(initialTransaction)=>({
                url:'/api/v1/transactions',
                method:"POST",
                body:initialTransaction
            }),
            invalidatesTags:['transaction']
        }),
        
        // delete record
        deleteTransaction:builder.mutation({
            query:recordId=>({
                url:'/api/transactions',
                method:"DELETE",
                body:recordId
            }),
            invalidatesTags:['transaction']
        })
    })
})
export default apiSlice;