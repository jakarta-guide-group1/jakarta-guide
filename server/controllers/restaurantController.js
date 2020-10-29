const axios  = require("axios");

class Restaurant {
    static fetchRestaurants(req, res, next) {
        console.log('xxx')
        axios({
            method: 'GET',
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=Jakarta',
            headers: {
                'user-key':'18fd57307d5fc07e8af0ac1e70cb7181'
            }
        })
        .then(data=> {
            data = JSON.stringify(data.data.restaurants);
            data = JSON.parse(data)
            data = data.map(el=> {
                return {
                    id: el.restaurant.id,
                    name: el.restaurant.name,
                    url: el.restaurant.url,
                    loc: el.restaurant.location.address,
                    cuisines: el.restaurant.cuisines,
                    timings: el.restaurant.timings,
                    photos: el.restaurant.featured_image
                }
            })
            res.status(200).json(data)
        })
        .catch(err=> {
            console.log(err)
            res.status(500).json(err)
        })
    }
}
module.exports = Restaurant 