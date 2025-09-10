const ping = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is alive 🚀",
    // time: new Date().toISOString(),
    year: new Date().getFullYear(),
  });
};

module.exports = { ping };
