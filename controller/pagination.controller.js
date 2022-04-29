const Test = require("../models/model");
const pagination = require("../service/pagination.service");
const createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.json({ test });
  } catch (error) {
    res.json(error);
  }
};

const getTest = async (req, res) => {
  try {
    const { startDate, endDate, first, after, last, before } = req.body;
    const data = await pagination( startDate, endDate, first, after, last, before );
    res.json({ data });
  } catch (error) {
    res.json(error);
  }
};
module.exports = { createTest, getTest };
