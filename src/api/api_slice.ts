import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
    id: number;
    title: string;
    body: string;
}
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        receivedPost: builder.query<Post[], number | void>({
            query: () => '/posts', 
        }),
    }),
});

export const {  useReceivedPostQuery } = apiSlice;