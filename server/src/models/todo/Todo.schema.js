const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
  },
  text: {
    type: String,
    maxLength: 400,
    required: true,
    default: "",
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },

});

module.exports = {
  // "Todo" creates the mongoDb table "Todos"
  TodoSchema: mongoose.model("Todo", TodoSchema),
};
