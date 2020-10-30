const axios = require("axios");
const { Destination } = require("../models");

class DestinationController {
  static async getDestinations(req, res, next) {
    try {
      const city = "jakarta";
      const category = "attraction";
      const detail = "popular";
      const key = "AIzaSyBwxKv_sLS0_EDLoqggjcfTJekoetAkfOQ";

      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${detail}+${category}+${city}&type=attraction&key=${key}`
      );

      res.json(data.results);
      console.log(data.results);
    } catch (err) {
      next(err);
    }
  }

  static async addDestination(req, res, next) {
    try {
      const credentials = {
        name: req.body.name,
        address: req.body.address,
        rating: +req.body.rating,
        imageURL: req.body.imgURL,
        UserId: 1,
      };
      // console.log(credentials);
      const destination = await Destination.create(credentials);

      res.status(201).json({
        destination,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = DestinationController;
