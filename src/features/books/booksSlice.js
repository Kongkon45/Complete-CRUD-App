import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: 1,
        name: "Computer Application",
        description: "Computer Application Description",
      },
      {
        id: 2,
        name: "Mathematics",
        description: "Mathematics Book Description",
      },
    ],
  },
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, name, description } = action.payload;
      const selectedBook = state.books.filter((book) => book.id === id);
      if (selectedBook) {
        (selectedBook[0].name = name),
          (selectedBook[0].description = description);
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
