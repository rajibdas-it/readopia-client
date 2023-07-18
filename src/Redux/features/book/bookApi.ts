import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getAllBooks: builder.query({
    //   query: ({ queryParams }) => {
    //     // Check if queryParams object is empty
    //     const isEmptyQuery = Object.keys(queryParams).length === 0;

    //     // If it's an empty query, return the base URL without any query parameters
    //     if (isEmptyQuery) {
    //       return "/book";
    //     }

    //     // Convert the queryParams object into a URL query string
    //     const queryString = Object.keys(queryParams)
    //       .map(
    //         (key) =>
    //           `${encodeURIComponent(key)}=${encodeURIComponent(
    //             queryParams[key]
    //           )}`
    //       )
    //       .join("&");

    //     // Append the query string to the base URL
    //     return `/book?${queryString}`;
    //   },
    //   providesTags: ["books"],
    // }),
    getAllBooks: builder.query({
      query: () => "/book",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/update-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/delete-book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    getAllGenreAndPublicationYear: builder.query({
      query: () => "book/genre-publishYear",
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetAllGenreAndPublicationYearQuery,
} = bookApi;
