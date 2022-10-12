const errorMiddleware = (err, _req, res) => {
  if (err.status) return res.status(err.status).json(err.message);
  
  return res.status(500).json({ message: `Something went wrong, we're sorry for that. 
  Please try again.` });
};

module.exports = errorMiddleware;