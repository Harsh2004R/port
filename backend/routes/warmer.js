// this route will handle cold start time on serverless deployment...
// it will simply return a ping data...
app.get("/ping", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is alive 🚀",
    time: new Date().toISOString(),
  });
});
