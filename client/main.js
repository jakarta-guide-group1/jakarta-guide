const SERVER = "http://localhost:3000"

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
  $("#hotel").hide()
  $("#restaurant").show()
  $("#destination").hide()
}
function showDestination() {
  $("#hotel").hide()
  $("#restaurant").hide()
  $("#destination").show()
}