export const renderHome = (req, res) => {
  const number = +req.query.number;
  const countdownNumber = +req.query.countdownNumber;

  const userIpAddress =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.render("index", {
    title: "codeacademy",
    pageName: "Home",
    userIpAddress,
    number,
    countdownNumber,
  });
};
