const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({
  nickname: { type: String, required: true },
  category: { type: String, required: true },
  correct_answers: { type: String, required: true },
  trivia_duration: { type: String, required: true },
});

module.exports = mongoose.model("Score", ScoreSchema);