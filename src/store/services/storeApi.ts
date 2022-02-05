import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: 'https://fe-assignment.vaimo.net/'
  }),

  endpoints: (builder) => ({
    getAnyData: builder.query({
      query: () => ''
    }),
  })
})

export const { reducer } = storeApi
export const { useGetAnyDataQuery } = storeApi
export default storeApi