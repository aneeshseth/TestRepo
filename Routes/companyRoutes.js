const express = require("express");
const router = express.Router();
const {
  getEmp,
  updateEmp,
  deleteEmp,
  createEmp,
} = require("../Controllers/companyController");

router.route("/add").post(createEmp);
router.route("/emp/:id").get(getEmp).put(updateEmp).delete(deleteEmp);

module.exports = router;
