import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
  isLoading: false,
  error: "",
};

const todosListSlice = createSlice({
  name: "todosList",
  initialState,
  reducers: {
    fetchTodosLoading: (state) => {
      state.isLoading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
    fetchTodosFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    },
  });

const { reducer, actions } = todosListSlice;

export const {
  fetchTodosLoading,
  fetchTodosSuccess,
  fetchTodosFailure,

} = actions;

export default reducer;
