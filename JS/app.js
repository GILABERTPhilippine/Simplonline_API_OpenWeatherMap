// Date qui se met à jour
moment.locale("fr");
$("#date").text(moment().format('LL'));

// Afficher les données Météo et la position avec OpenWeatherMap
// $("#valider").click(function() {
//   var ville = $("#ville").val();
//   if (ville != ' ') {
//       $.ajax({
//           url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da",
//           type: "Get",
//           dataType: "jsonp",
//           success: function (data) {
//             var resultat = "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da"

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#temperature").text(parseInt(reponseJson.main.temp)))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#tempMax").text(reponseJson.main.temp_max))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#tempMin").text(reponseJson.main.temp_min))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#presAtmos").text(reponseJson.main.pressure))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#vent").text(reponseJson.wind.speed))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#humidite").text(reponseJson.main.humidity))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#longitude").text(reponseJson.coord.lon))

//             window.fetch(resultat)
//                 .then(reponse => reponse.json())
//                 .then(reponseJson => $("#latitude").text(reponseJson.coord.lat))
//             }
//         });
// };

var ville = $("#ville").val();
function meteo(ville){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=aea20090de4141f70b5989b62d66699f",
        type: "POST",
        dataType: "jsonp",
        success: function(data){
            $("#temperature").text(parseInt(data.main.temp));
            $("#tempMax").text(data.main.temp_max);
            $("#tempMin").text(data.main.temp_min);
            $("#presAtmos").text(data.main.pressure);
            $("#humidite").text(data.main.humidity);
            $("#vent").text(data.wind.speed);
            $("#longitude").text(data.coord.lon);
            $("#latitude").text(data.coord.lat);
            $("#carte").html("<iframe  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDv-spiEhDJZfoGge7NAxMECClWHHbxd2Q&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
        }
    })
}

$(document).ready(function(){
    meteo(ville);
    $("#valider").click(function(){
        ville = $("#ville").val();
        meteo(ville);
    })
})


// Version mobile / responsive
$("#btnadd").hide();

$(function() { 
	var windowWidth= $(window).width();
	if($(window).width () < 700){
        $("#donneesMeteo").hide();
        $("#btnadd").show();
        $("#btnadd").click(function() {
            $("#donneesMeteo").toggle();
        });
    }
});