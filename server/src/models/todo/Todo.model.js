const { TodoSchema } = require("./Todo.schema");

const insertTodo = (newTodoObj) => {
  return new Promise((resolve, reject) => {
    try {
      TodoSchema(newTodoObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject("Error at TodoSchema.save / " + error));
    } catch (error) {
      console.log("Error at insertTodo / " + error);
    }
  });
};

const getAllTodos = () => {
  return new Promise((resolve, reject) => {
    try {
      // opened at -1 orders returned data in descending order (openedAt newest to oldest)
      TodoSchema.find().sort({ openedAt: -1 })
        .then((data) => resolve(data))
        .catch((error) => reject("Error at TodoSchema.find / " + error));
    } catch (error) {
      console.log("Error at getAllTodos / " + error);
    }
  });
};

const deleteTodo = (_id, ) => {
  return new Promise((resolve, reject) => {
    try {
      TodoSchema.findOneAndDelete({ _id })
        .then((data) => resolve(data))
        .catch((error) =>
          reject("Error at TodoSchema.findOneAndDelete / " + error)
        );
    } catch (error) {
      console.log("Error at deleteTodo / " + error);
    }
  });
};

module.exports = {
  insertTodo,
  getAllTodos,
  deleteTodo,
};
