import { createSlice } from "@reduxjs/toolkit";

export interface IFilter {
  search: string | null;
  genre: string | null;
  publicationYear: string | null;
}

const initialState: IFilter = {
  search: null,
  genre: null,
  publicationYear: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
    setGenreValue: (state, action) => {
      state.genre = action.payload;
    },
    setPublicationYear: (state, action) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setSearchValue, setGenreValue, setPublicationYear } =
  filterSlice.actions;
export default filterSlice.reducer;
