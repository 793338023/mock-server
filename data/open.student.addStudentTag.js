module.exports = async (ctx) => {
  console.log(ctx.request.body);
  return {
    msg: "success",
    code: 200,
    requestId: "4104c9a0",
    timestamp: 1621307050565,
  };
};
