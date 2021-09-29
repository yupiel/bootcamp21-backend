const response = (statusCode, { message, error }) => {
  if (typeof statusCode != "number")
    throw new Error("status code was not a number");

  let messageBuilder = { statusCode: statusCode };
  if (message) {
    messageBuilder.message = message;
  }
  if (error) {
    messageBuilder.error = error;
  }

  return messageBuilder;
};

module.exports = response;
