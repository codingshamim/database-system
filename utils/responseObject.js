const responseObject = (res, code, object) => {
  return res.status(code).json(object);
};

module.exports = responseObject;
