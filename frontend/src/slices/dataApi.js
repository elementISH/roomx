import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (params) => `${params ? params : "rooms"}`,
    }),
  }),
});
export const { useGetDataQuery } = dataApi;
