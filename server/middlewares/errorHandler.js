function errorHandler(err, req, res, next) {
  if (err.name === "invalid") {
    res.status(401).json({ message: "Invalid Input" });
  } else if (err.name === "notFound" || err.name === "BSONError") {
    res.status(404).json({ message: "Stuff you looking for doesn't exist" });
  } else if (err.name === "badLogin") {
    res.status(401).json({ message: "Invalid email or password" });
  } else if (err.name === "Invalid token" || err.name === "JsonWebTokenError") {
    res.status(401).json({
      message: "Invalid token",
    });
  } else if (err.name === "loginFirst") {
    res.status(401).json({
      message: "You must login first",
    });
  } else if (err.name === "forbidden") {
    res.status(403).json({
      msg: "You don't have permission to do this action",
    });
  } else {
    res.status(500).json({ message: "Something is wrong with the server" });
  }
}

module.exports = errorHandler;
