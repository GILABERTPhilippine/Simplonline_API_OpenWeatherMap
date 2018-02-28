// Date qui se met à jour
moment.locale("fr");
$("#date").text(moment().format('LL'));

// Afficher la carte et la position
$("#valider").click(function() {
  var ville = $("#ville").val();
  if (ville != ' ') {
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da",
          type: "Get",
          dataType: "jsonp",
          success: function (data) {
            var resultat = "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da"
              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#temperature").text(parseInt(reponseJson.main.temp)))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#tempMax").text(reponseJson.main.temp_max))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#tempMin").text(reponseJson.main.temp_min))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#presAtmos").text(reponseJson.main.pressure))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#vent").text(reponseJson.wind.speed))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#humidite").text(reponseJson.main.humidity))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#longitude").text(reponseJson.coord.lon))

              window.fetch(resultat)
                  .then(reponse => reponse.json())
                  .then(reponseJson => $("#latitude").text(reponseJson.coord.lat))
          }
      });
  }

});



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
