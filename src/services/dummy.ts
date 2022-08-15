import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const dummy = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: () => ({}),
})
export default dummy
