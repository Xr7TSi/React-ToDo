const express = require("express");
const router = express.Router();
const {
  insertTodo,
  getAllTodos,
  deleteTodo,
} = require("../models/todo/Todo.model");
const { userAuthorization } = require("../middleware/authorization.middleware");


// create new todo
// this is the API/todo/ endpoint
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    const todoObj = {
      text,
      isCompleted: false,
    };
    const result = await insertTodo(todoObj);
    if (result._id) {
      res.json({ status: "success", message: "Todo has been created" });
    }
  } catch (error) {
    console.log("Error at router.post / " + error);
  }
});

// get all todos
// this is the API/todo/all-todos route
router.get("/all-todos",  async (req, res) => {
  try {
    const result = await getAllTodos();

    return res.json({ status: "success", result });
  } catch (error) {
    console.log("Error at router.get / " + error);
  }
});


// delete a todo by id
// this is the API/todo/:todoId route
router.delete("/:_Id", async (req, res) => {
  try {
    // _id is an individual ticket id in mongodb
    const _id = req.params._Id;

    const result = await deleteTodo(_id);

      return res.json({
        status: "success",
        message: "Todo has been deleted.",
      });
  
  } catch (error) {
    console.log("Error at router.delete /:_Id " + error);
  }
});

module.exports = router;
