// Date qui se met à jour
moment.locale("fr");
$("#date").text(moment().format('LL'));


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

// Activer la touche entrer
$("#ville").keypress(function(e){
    if ( e.keyCode == 13 ) {
        ville = $("#ville").val();
        meteo(ville);
    }
});


// Version mobile / responsive

$("#btnadd").hide();

var windowWidth= $(window).width();
	if($(window).width () < 700){
        $("#donneesMeteo").hide();
        $("#btnadd").show();
        $("#btnadd").click(function() {
            $("#donneesMeteo").toggle();
        });
    }