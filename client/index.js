const SERVER = "http://localhost:3000"

function showWeather(e){
    $.ajax({
        method: "GET",
        url: SERVER + "/weather",
    })
    .done(result=>{
        console.log(result);
        $('#kota').append(`${result.name}`)
        $('#temp').append(`Temp: ${result.temp}`)
        $('#weather').append(`Weather: ${result.weather}`)
    })
    .fail(err=>{
        console.log(err);
    })
}
showWeather()