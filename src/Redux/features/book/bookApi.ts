import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/book",
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
