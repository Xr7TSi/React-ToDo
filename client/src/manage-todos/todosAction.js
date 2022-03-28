import {
  fetchTodosLoading,
  fetchTodosSuccess,
  fetchTodosFailure,
} from "./todosSlice";

import {
  getAllTodos,
} from "../../api/todoAPI";

export const fetchAllTodos = () => async (dispatch) => {
  dispatch(fetchTodosLoading());

  try {
    const result = await getAllTodos();

    // if there are tickets, dispatch 
    result.data.result.length && dispatch(fetchTodosSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTodosFailure("Error at fetchAllTodos / " + error.message));
  }
};








