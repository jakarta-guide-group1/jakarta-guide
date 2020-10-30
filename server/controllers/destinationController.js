const axios = require('axios')

class DestinationController {
  static async getDestinations(req, res, next) {
    try {
      const city = 'jakarta'
      const category = 'attraction'
      const key = 'AIzaSyBwxKv_sLS0_EDLoqggjcfTJekoetAkfOQ'

      const {data} = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${city}&type=attraction&key=${key}`
      )
      
      res.json(data.results)
      } 
     catch (err) {
     next(err)
     }
   }
   
}

module.exports = DestinationController