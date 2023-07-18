import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ filterOption }) => {
        if (filterOption === null) {
          return "/book";
        } else {
          const queryString = Object.entries(filterOption)
            .filter(([key, value1]) => value1 !== null)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");

          return queryString.length > 0 ? `book/${queryString}` : "/book";
        }
      },
      providesTags: ["books"],
    }),
    // getAllBooks: builder.query({
    //   query: () => "/book",
    //   providesTags: ["books"],
    // }),

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
