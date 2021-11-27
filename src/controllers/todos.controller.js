const { StatusCodes } = require('http-status-codes');

module.exports = {
  all: async (_, response) => {
    response.sendStatus(StatusCodes.UNAUTHORIZED);
  },
};
