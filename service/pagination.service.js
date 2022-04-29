// const paginationArgs = require("../argument/pagination.args");
const Test = require("../models/model");
const { Op } = require("../argument/connectDB");
const moment = require("moment");
const pagination = async (startDate, endDate, first, after, last, before) => {
  //start pagination
  //first before
  //encoded decoded cursor
  if (!startDate) {
    startDate = new Date(0);
  }
  if (!endDate) {
    endDate = new Date();
  }
  //Forward paginate
  if (first && after) {
    const decodeCursor = Buffer.from(after, "base64").toString("ascii");
    endDate = new Date(+new Date(decodeCursor));
  }
  //Backward paginate
  else if (last && before) {
    const decodeCursor = Buffer.from(before, "base64").toString("ascii");
    startDate = moment(new Date(+new Date(decodeCursor)));
  } else {
    console.log("not pagination");
  }
  const testData = await Test.findAll({
    limit: first ? first : last,
    order: [["id", "DESC"]],
    attributes: ["id", "name", "createdAt", "updatedAt"],
    where: { createdAt: { [Op.gt]: startDate, [Op.lt]: endDate } },
  });
  const result = testData.map((value) => {
    return {
      node: {
        id: value.id,
        name: value.name,
        createdAt: value.createdAt,
        updatedAt: value.updatedAt,
      },
      cursor: Buffer.from(value.dataValues.createdAt).toString("base64"),
    };
  });
  return result;
};
module.exports = pagination;
