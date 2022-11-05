import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Employee'],
  endpoints: builder => ({
    getAllEmployees: builder.query({
      query: () => '/',
      providesTags: ['Employee']
    }),
    saveEmployee: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employee']
    })
  })
})

export const { useGetAllEmployeesQuery, useSaveEmployeeMutation } = api;