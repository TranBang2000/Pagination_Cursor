const Joi = require("joi");
const paginationArgs = {
  first: Joi.number().optional(),
  last: Joi.number().optional(),
  after: Joi.string().optional(),
  before: Joi.string().optional(),
};
module.exports = paginationArgs;
