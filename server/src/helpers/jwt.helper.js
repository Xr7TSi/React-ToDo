const jwt = require("jsonwebtoken");
const { setJWT } = require("./redis.helper");
const { storeUserRefreshJWT } = require("../models/user/User.model");

const accessSecret = process.env.JWT_ACCESS_SECRET
const refreshSecret = process.env.JWT_REFRESH_SECRET

const createAccessJWT = async (email, _id) => {
  try {
    const accessJWT = jwt.sign({ email }, accessSecret, {
      expiresIn: "30d",
    });

    setJWT(accessJWT, _id);

    return Promise.resolve(accessJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createRefreshJWT = async (email, _id) => {
  try {
    const refreshJWT = jwt.sign({ email }, refreshSecret, {
      expiresIn: "30d",
    });

    await storeUserRefreshJWT(_id, refreshJWT);

    return Promise.resolve(refreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

// used in authorization middleware
const verifyAccessJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, accessSecret));
  } catch (error) {
    return Promise.resolve(error);
  }
};

const verifyRefreshJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, refreshSecret));
  } catch (error) {
    return Promise.resolve(error);
  }
};

module.exports = {
  createAccessJWT,
  createRefreshJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
};




