import axios from "axios";

const rootURL = "/API/";
const todoURL = rootURL + "todo/";
const getAllTodosURL = todoURL + "all-todos/";


export const getAllTodos = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(getAllTodosURL);
      resolve(result);
    } catch (error) {
      reject("Error at getAllTodos / " + error);
    }
  });
};

export const createNewTodo = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(todoURL, formData);

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject("Error at createNewTodo / " + error);
    }
  });
};





