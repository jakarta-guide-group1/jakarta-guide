// var Amadeus = require("amadeus");
// var amadeus = new Amadeus({
//   clientId: 'MMzGCydWwXCELHxy0n6exnM7dJp98upn',
//   clientSecret: 'CS77yQ3S9fbmrwqP'
// });

// // // Recommended locations similar to PAR
// // amadeus.referenceData.recommendedLocations.get({
// //     cityCodes: 'PAR',
// //     travelerCountryCode: 'FR'
// // }).then(function(response) {
// //     console.log(response.data);
// // }).catch((error) => {
// //     console.log("Error");
// //     done();
// // });

// // var Amadeus = require("amadeus");
// // var amadeus = new Amadeus({
// //   clientId: 'YMMzGCydWwXCELHxy0n6exnM7dJp98upn',
// //   clientSecret: 'CS77yQ3S9fbmrwqP'
// // });

// // What are the popular places in Barcelona (based on a geo location and a radius)
// amadeus.referenceData.locations.pointsOfInterest.get({
//   latitude: 13.7563,
//   longitude: 100.5018
// }).then(function (response) {
//   console.log(response);
// }).catch(function (response) {
//   console.error(response);
// });

const axios = require('axios')
const router = require('express').Router()
module.exports = router
const key = process.env.GOOGLE_API_KEY
router.get('/restaurants', async (req, res, next) => {
 try {
   const neighborhood = 'chelsea'
   const borough = 'manhattan'
   const city = 'new+york+city'
   const category = 'burgers'
   const {data} = await axios.get(
   
`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
   )
   res.json(data)
   } 
 catch (err) {
  next(err)
}
})

// destinationController
const axios = require('axios')

class DestinationController {
  static async getDestinations(req, res, next) {
    try {
      const city = 'jakarta'
      const category = 'attraction'
      const key = 'AIzaSyBwxKv_sLS0_EDLoqggjcfTJekoetAkfOQ'

      const {data} = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${city}&type=attraction&key=${key}`
        // `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=attraction%20Jakarta&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours&key=${key}`
      )
      res.json(data.results[0])
      // console.log(data.results)
      } 
     catch (err) {
     next(err)
     }
   }
   
}

module.exports = DestinationController


// ShowDestination FUnction

//html

// <!-- DESTINATIONS -->
// <div class="container-lg">
//   <p style="text-align: center;"><strong>Top Destinations in Jakarta</strong></p><br><br>
//   <div id="destinations" class="row row-cols-2">

//   </div><br>
// </div>
// <!-- END DESTINATIONS -->

// js

function showDestinations() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + `/destinations`,
    headers: {
      // token: token
    }
  }).done(response => {
    console.log(response)
    let destinations;
    $("#destinations").empty()
    for (let i= 0; response.length; i++) {
      destinations = response[i]
      // let due_date = new Date(response[i].due_date.toString().slice(0, 10)).toDateString()

      $("#destinations").append(`

      <div class="col my-2 p-3 card">
        <p><strong>Name</strong>: ${destinations.name}</p>
        <p><strong>Address</strong>: ${destinations.formatted_address}</p>
        <p><strong>Rating</strong>: ${destinations.rating}</p>
        <p><strong><img src="${destinations.photos[0].photo_reference}"></strong>:</p>
        <hr/>
      <div class="d-flex justify-content-center">
      <button class="btn text-danger" onclick="deleteTodo(${todo.id})">Delete task</button>
      </div>
      
      `)
      todo = response[i+1]
    }
    console.log(response)
  }).fail(err => {
    console.log(err)
  })
}