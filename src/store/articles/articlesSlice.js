import { createSlice } from "@reduxjs/toolkit";
import { createBook, deleteBook, getBooks } from "./articlesOptions";

const articlesSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getBooks.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      // .addCase(getBooks.rejected, (state, { payload }) => {
      //   state.error = true;
      //   state.errorMessage = payload;
      //   state.loading = false;
      //   state.items = [];
      // })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
        state.items = [];
      })
      // .addCase(createBook.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(createBook.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(createBook.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.items = [];
      })
      // .addCase(deleteBook.pending, (state) => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(book => book.id !== payload.id);
        state.loading = false;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.items = [];
      })
      .addMatcher(
        (action) => {
          if (action.type.endsWith("/pending")) return true;
        },
        (state) => {
          state.loading = true;
        }
      );
  },
});

export const articlesReducer = articlesSlice.reducer;
