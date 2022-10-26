exports.handler = async (event) => {
  try {
    console.log(
      `Lambda Subtraction start, received arguments: ${JSON.stringify(
        event.body
      )}`
    );

    const { value1, value2 } = JSON.parse(event.body);

    const result = value1 - value2;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
        result: result,
      }),
    };
  } catch (error) {
    return JSON.stringify({
      statusCode: 500,
      body: {
        message: `Internal Server error! Stack: [${error}]`,
      },
    });
  }
};
