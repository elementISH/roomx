import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://roomx.vercel.app/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (params) => `${params ? params : "rooms"}`,
    }),
  }),
});
export const { useGetDataQuery } = dataApi;
