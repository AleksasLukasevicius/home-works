// ne visus routes tikrinam pagal auth, del to .use taikykit pagal poreiki
export const isLoggedIn = (req, res, next) => {
  const accessToken = req.headers.authorization;
  const isAuthorized = accessToken; // TODO: JWT validation

  if (!isAuthorized) {
    res.status(401).send({ error: "Unauthorized" }).end();
    // return next("Unauthorized"); // pateikus argumenta iseina is expresso Router (beveik tas pats kaip app)
  }

  return next();
};
