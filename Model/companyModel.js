const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  experienceInYears: {
    type: Number,
  },
  Department: {
    type: String,
  },
  Skills: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("company", companySchema);
