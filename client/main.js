const SERVER = "http://localhost:3000";
let restaurant = [];

$(document).ready(() => {
  const token = localStorage.getItem("token");
  if (token) {
    $("#home").show();
    $("#dashboard").show();
    $("#login").hide();
    $("#register").hide();
    $("#home-bar").show();
    $("#booking-bar").show();
    $("#add-new-booking-bar").show();
    $("#register-bar").hide();
    $("#login-bar").hide();
    $("#logout-bar").show();
    $("#weatherbar").show();
    fetchRestaurant();
  } else {
    $("#dashboard").hide();
    $("#login").show();
    $("#register").hide();
    $("#home-bar").hide();
    $("#booking-bar").hide();
    $("#add-new-booking-bar").hide();
    $("#register-bar").show();
    $("#login-bar").show();
    $("#logout-bar").hide();
    $("#weatherbar").hide();
    $("#home").hide();
  }

  $("#logout-bar").on("click", () => {
    logout();
  });

  $("#login-bar").on("click", () => {
    showLogin();
  });

  $("#register-bar").on("click", () => {
    showRegister();
  });
  $("#a-register").on("click", (event) => {
    event.preventDefault();
    showRegister();
  });

  $("#restaurant-bar").on("click", () => {
    showRestaurant();
  });

  $("#destination-bar").on("click", () => {
    showDestination();
  });
});

function showLogin() {
  $("#dashboard").hide();
  $("#login").show();
  $("#register").hide();
  $("#home-bar").hide();
  $("#booking-bar").hide();
  $("#add-new-booking-bar").hide();
  $("#register-bar").show();
  $("#login-bar").show();
  $("#logout-bar").hide();
}

function showRegister() {
  $("#dashboard").hide();
  $("#login").hide();
  $("#register").show();
}

function login(event) {
  event.preventDefault();
  const email = $("#login-email").val();
  const password = $("#login-password").val();

  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      email,
      password,
    },
  })
    .done((response) => {
      const token = response.access_token;
      localStorage.setItem("token", token);
      $("#home").show();
      $("#dashboard").show();
      $("#login").hide();
      $("#register").hide();
      $("#home-bar").show();
      $("#booking-bar").show();
      $("#add-new-booking-bar").show();
      $("#register-bar").hide();
      $("#login-bar").hide();
      $("#logout-bar").show();
      $("#weatherbar").show();
      showWeather();
      fetchRestaurant();
    })
    .fail((err) => {
      console.log(err);
    });
}

// Google SignIn
function onSignIn(googleUser) {
  const google_token = googleUser.getAuthResponse().id_token;

  $.ajax({
    method: "POST",
    url: SERVER + "/googleLogin",
    data: {
      google_token,
    },
  })
    .done((response) => {
      const token = response.access_token;
      localStorage.setItem("token", token);
      $("#home").show();
      $("#dashboard").show();
      $("#login").hide();
      $("#register").hide();
      $("#home-bar").show();
      $("#booking-bar").show();
      $("#add-new-booking-bar").show();
      $("#register-bar").hide();
      $("#login-bar").hide();
      $("#logout-bar").show();
      $("#weatherbar").show();
      showWeather();
      fetchRestaurant();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Google SignOut
function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

function register(event) {
  event.preventDefault();
  const email = $("#register-email").val();
  const password = $("#register-password").val();

  $.ajax({
    method: "POST",
    url: SERVER + "/register",
    data: {
      email,
      password,
    },
  })
    .done((response) => {
      $("#register").hide();
      $("#login").show();
    })
    .fail((err) => {
      console.log(err);
    });
}
function fetchRestaurant() {
  $.ajax({
    method: "GET",
    url: SERVER + "/restaurant",
    headers: {
      access_token: localStorage.token,
    },
  })
    .done((result) => {
      restaurant = result;
      console.log(restaurant);
      $("#fetch-restaurant").empty();
      $.each(restaurant, function (key, value) {
        $("#fetch-restaurant").append(`
        <div class="card col-3 mx-4 mb-4">
        <img src="${value.photos}" class="card-img-top pt-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text"><b>Address</b>: ${value.location}</p>
          <p class="card-text"><b>Cuisines</b>: ${value.cuisines}</p>
          <p class="card-text"><b>Open</b>: ${value.timings}</p>
          <p class="card-text"><b>phone Number</b>: ${value.phone}</p>
          <a href="${value.url}" class="btn btn-primary">Go To Link</a>
        </div>
      </div>`);
      });
    })
    .fail((err) => {
      console.log(err);
    });
}
function logout() {
  localStorage.clear();
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
  $("#emailLogin").val("");
  $("#passwordLogin").val("");
  $("#weatherbar").hide();
  $("#bookmark-destination").hide();
  showLogin();
}

function showBookmark() {
  fecthUserDestination();
  $("#home").hide();
  $("#bookmark").show();
  $("#bookmark-destination").show();
  $("#weatherbar").show();
}
function showHome() {
  $("#home").show();
  $("#bookmark").hide();
  $("#weatherbar").show();
}
function showRestaurant() {
  fetchRestaurant();
  $("#hotel").hide();
  $("#restaurant").show();
  $("#destination").hide();
}
function showDestination() {
  $("#hotel").hide();
  $("#restaurant").hide();
  $("#destination").show();
  fetchDestinations();
}

function fetchDestinations() {
  $.ajax({
    method: "GET",
    url: SERVER + "/destinations",
  })
    .done((response) => {
      let destinations;
      $("#destination").empty();
      $("#destination").append(`
      <h1>Popular Destinations</h1>
      <div class="row row-cols-4">
      `);
      for (let i = 0; i < 10; i++) {
        destinations = response[i];
        const key = "AIzaSyBwxKv_sLS0_EDLoqggjcfTJekoetAkfOQ";
        $("#destination").append(`
        
        <div class="col my-3 p-2 card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title" id="destination${i + 1}-name" value="${
          destinations.name
        }">${destinations.name}</h5>
          <img width="216" height="144" src="https://maps.googleapis.com/maps/api/place/photo?key=${key}&photoreference=${
          destinations.photos[0].photo_reference
        }&maxheight=${destinations.photos[0].height}" 
        id="destination${i + 1}-img">
          <p class="card-text" id="destination${i + 1}-address" value="${
          destinations.formatted_address
        }">${destinations.formatted_address}</p>
          <p class="fa fa-star checked" value="${
            destinations.rating
          }" id="destination${i + 1}-rating">&nbsp;${destinations.rating}</p>
          <br>
          <a onclick="addDestination(${i + 1})" class="btn btn-primary">Add ${
          destinations.name
        } to plan</a>
        </div>
        </div>
        
      `);

        $("#destination").append(`
        </div>
      `);
        destinations = response[i + 1];
      }
    })
    .fail((err) => {
      console.log(err);
    });
}

function addDestination(num) {
  const name = $(`#destination${num}-name`).text();
  const imgURL = $(`#destination${num}-img`).attr("src");
  const address = $(`#destination${num}-address`).text();
  const rating = $(`#destination${num}-rating`).text();

  $.ajax({
    method: "POST",
    url: SERVER + "/destinations/add",
    data: {
      name,
      address,
      rating,
      imgURL,
    },
  })
    .done((response) => {
      console.log(response);
    })
    .fail((err) => {
      console.log(err);
    });
}
function showWeather(e) {
  $("#kota").empty();
  $("#temp").empty();
  $("#weather").empty();
  $.ajax({
    method: "GET",
    url: SERVER + "/weather",
  })
    .done((result) => {
      console.log(result);
      $("#kota").append(`${result.name}`);
      $("#temp").append(`Temp: ${result.temp}`);
      $("#weather").append(`Weather: ${result.weather}`);
    })
    .fail((err) => {
      console.log(err);
    });
}

function fecthUserDestination() {
  $.ajax({
    method: "GET",
    url: SERVER + "/destinations/1",
  })
    .done((response) => {
      let destinations;
      $("#bookmark-destination").empty();
      $("#bookmark-destination").append(`
      <h1>Bookmarked Destination</h1>
      <div class="row row-cols-4">
      `);
      for (let i = 0; i < response.length; i++) {
        destinations = response[i];
        console.log(destinations);
        $("bookmark-destination").append(`
        
        <div class="col my-3 p-2 card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title" id="destination${i + 1}-name" value="${
          destinations.name
        }">${destinations.name}</h5>
          <img width="216" height="144" src="${destinations.imageURL}">
          <p class="card-text" id="destination${i + 1}-address" value="${
          destinations.formatted_address
        }">${destinations.formatted_address}</p>
          <p class="fa fa-star checked" value="${
            destinations.rating
          }" id="destination${i + 1}-rating">&nbsp;${destinations.rating}</p>
          <br>
          <a onclick="addDestination(${i + 1})" class="btn btn-primary">Add ${
          destinations.name
        } to plan</a>
        </div>
        </div>
        
      `);

        $("bookmark-destination").append(`
        </div>
      `);
        destinations = response[i + 1];
      }
    })
    .fail((err) => {
      console.log(err);
    });
}

function fecthUserRestaurant() {}
