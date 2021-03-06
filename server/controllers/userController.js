const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");

const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  // Register, Login
  static async register(req, res, next) {
    try {
      const credentials = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await User.create(credentials);

      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const credentials = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await User.findOne({
        where: {
          email: credentials.email,
        },
      });

      if (!user) {
        res.status(401).json({
          message: "Invalid email or password",
        });
      } else if (!comparePassword(credentials.password, user.password)) {
        res.status(401).json({
          message: "Invalid email or password",
        });
      } else {
        const access_token = signToken({
          id: user.id,
          email: user.email,
        });

        res.status(200).json({
          access_token,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async googleLogin(req, res) {
    try {
      const google_token = req.body.google_token;
      const client = new OAuth2Client(process.env.CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const email = payload.email;
      const user = await User.findOne({ where: { email: payload.email } });
      if (user) {
        const access_token = signToken({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({ access_token });
      } else {
        const userObj = {
          email,
          password: "random",
        };
        const newUser = await User.create(userObj);
        const access_token = signToken({
          id: newUser.id,
          email: newUser.email,
        });
        res.status(200).json({ access_token });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
