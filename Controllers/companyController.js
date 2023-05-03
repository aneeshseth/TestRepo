const Emp = require("../Model/companyModel");
const createEmp = async (req, res, next) => {
  const user = await Emp.create(req.body);
  return res.json({
    User: user.toObject(),
  });
};

const getEmp = async (req, res, next) => {
  const user = await Emp.findById(req.params.id).lean();
  return res.json({
    message: user,
  });
};

const updateEmp = async (req, res, next) => {
  const user = await Emp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).lean();
  return res.json({
    "Updated User": user,
  });
};

const deleteEmp = async (req, res, next) => {
  await Emp.findByIdAndDelete(req.params.id);
  return res.json({
    "Deleted user": true,
  });
};

module.exports = { getEmp, updateEmp, deleteEmp, createEmp };
