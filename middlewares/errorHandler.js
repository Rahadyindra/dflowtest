function errorHandler(err, req, res, next) {
  if (err.name === "invalid") {
    res.status(401).json({ message: "Invalid Input" });
  } else {
    res.status(500).json({ message: "Something is wrong with the server" });
  }
}
