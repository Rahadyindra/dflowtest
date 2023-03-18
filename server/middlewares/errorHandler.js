function errorHandler(err, req, res, next) {
  if (err.name === "invalid") {
    res.status(401).json({ message: "Invalid Input" });
  } else if (err.name === "notFound" || err.name === "BSONError") {
    res.status(404).json({ message: "Stuff you looking for doesn't exist" });
  } else if (err.name === "badLogin") {
    res.status(401).json({ message: "Invalid email or password" });
  } else {
    res.status(500).json({ message: "Something is wrong with the server" });
  }
}

module.exports = errorHandler;
