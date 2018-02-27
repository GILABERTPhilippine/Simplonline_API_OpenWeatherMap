// Date qui se met à jour
moment.locale("fr");
$("#date").text(moment().format('LL'));

// Afficher la carte et la position

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#temperature").text(reponseJson.main.temp))

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#tempMax").text(reponseJson.main.temp_max))
  
window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#tempMin").text(reponseJson.main.temp_min))

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#presAtmos").text(reponseJson.main.pressure))

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#vent").text(reponseJson.wind.speed))

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#humidite").text(reponseJson.main.humidity))

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#longitude").text(reponseJson.coord.lon))
  

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=a98ee53cd7e7fdf70c48f4e96d5e60da')
  .then(reponse => reponse.json())
  .then(reponseJson => $("#latitude").text(reponseJson.coord.lat))