const SERVER = "http://localhost:3000"
let restaurant = []
$(document).ready(() => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    $("#dashboard").show()
    $("#login").hide()
    $("#register").hide()
    $("#home-bar").show()
    $("#booking-bar").show()
    $("#add-new-booking-bar").show()
    $("#register-bar").hide()
    $("#login-bar").hide()
    $("#logout-bar").show()
    showHotel()

  } else {
    $("#dashboard").hide()
    $("#login").show()
    $("#register").hide()
    $("#home-bar").hide()
    $("#booking-bar").hide()
    $("#add-new-booking-bar").hide()
    $("#register-bar").show()
    $("#login-bar").show()
    $("#logout-bar").hide()
  }

  $("#logout-bar").on("click", () => {
    logout()
  })

  $("#login-bar").on("click", () => {
    showLogin()
  })

  $("#register-bar").on("click", () => {
    showRegister()
  })
  $('#a-register').on('click', (event) => {
    event.preventDefault()
    showRegister()
  })
  $("#hotel-bar").on("click", () => {
    showHotel()
  })

  $("#restaurant-bar").on("click", () => {
    showRestaurant()
  })

  $("#destination-bar").on("click", () => {
    showDestination()
  })
})

function showLogin() {
  $("#dashboard").hide()
  $("#login").show()
  $("#register").hide()
  $("#home-bar").hide()
  $("#booking-bar").hide()
  $("#add-new-booking-bar").hide()
  $("#register-bar").show()
  $("#login-bar").show()
  $("#logout-bar").hide()
}

function showRegister() {
  $("#dashboard").hide()
  $("#login").hide()
  $("#register").show()
}

function login(event) {
  event.preventDefault()
  const email = $("#login-email").val()
  const password = $("#login-password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      email,
      password,
    }
  }).done(response => {
    const token = response.access_token
    localStorage.setItem('token', token)
    $("#login").hide()
    $("#register").hide()
    $("#home").show()
    $("#login-email").val("")
    $("#login-password").val("")

  }).fail(err => {
    console.log(err)
  })
}

function register(event) {
  event.preventDefault()
  const email = $("#register-email").val()
  const password = $("#register-password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/register",
    data: {
      email,
      password,
    }
  }).done(response => {
    $("#register").hide()
    $("#login").show()
    console.log(response)
  }).fail(err => {
    console.log(err)
  })
}
function fetchRestaurant() {
  $.ajax({
    method: 'GET',
    url: SERVER + "/restaurant",
    headers: {
      access_token: localStorage.token
    }
  })
    .done(result => {
      restaurant = result
      console.log(restaurant)
      $("#fetch-restaurant").empty()
      $.each(restaurant, function (key, value) {
        $("#fetch-restaurant").append(`
        <div class="card col-3 mx-4 mb-4 text-primary bg-dark" style="width: 18rem;">
        <img src="${value.photos}" class="card-img-top pt-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text"><b>Address</b>: ${value.loc}</p>
          <p class="card-text"><b>Cuisines</b>: ${value.cuisines}</p>
          <p class="card-text"><b>Open</b>: ${value.timings}</p>
          <p class="card-text"><b>phone Number</b>: ${value.phone}</p>
          <a href="${value.url}" class="btn btn-primary">Go To Link</a>
        </div>
      </div>`)
      })
    })
    .fail(err => {
      console.log(err)
    })
}
function logout() {
  localStorage.clear()
  $("#emailLogin").val('')
  $("#passwordLogin").val('')
  showLogin()
}
function showHotel() {
  $("#hotel").show()
  $("#restaurant").hide()
  $("#destination").hide()
}
function showRestaurant() {
  fetchRestaurant()
  $("#hotel").hide()
  $("#restaurant").show()
  $("#destination").hide()
}
function showDestination() {
  $("#hotel").hide()
  $("#restaurant").hide()
  $("#destination").show()
}