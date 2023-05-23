export const notFound = (req, re, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.Error;
  statusCode;
  res.status(statusCode);
  res.json({
    message: err.massage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
