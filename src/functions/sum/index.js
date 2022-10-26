const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  const request_id = uuidv4();

  try {
    console.log(
      `Lambda Sum start, received arguments: ${JSON.stringify(event.body)}`
    );

    const { value1, value2 } = JSON.parse(event.body);

    const result = value1 + value2;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
        result,
        request_id,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server error",
        request_id,
      }),
    };
  }
};
