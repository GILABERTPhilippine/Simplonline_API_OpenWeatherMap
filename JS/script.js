// Date qui se met à jour
moment.locale("fr");
$("#date").text(moment().format('LL'));

// Afficher la carte et la position
function initialiser() {
    var latlng = new google.maps.LatLng(43.0680924,1.4146279,10);
    //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
    //de définir des options d'affichage de notre carte
    var options = {
        center: latlng,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    //constructeur de la carte qui prend en paramêtre le conteneur HTML
    //dans lequel la carte doit s'afficher et les options
    var carte = new google.maps.Map($("#carte"), options);
}
function TrouverVille() {
    // Récupération de l'adresse tapée dans le formulaire
    var adresse = $('#ville').value;
    geocoder.geocode( { '#ville': ville}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        // Récupération des coordonnées GPS de la ville tapé dans l'input
        var strposition = results[0].geometry.location+"";
        strposition=strposition.replace('(', '');
        strposition=strposition.replace(')', '');
        // Affichage des coordonnées dans le <span>
        $('#text_latlng').innerHTML='Coordonnées : '+strposition;
        // Création du marqueur du lieu (épingle)
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Ville introuvable: ' + status);
      }
    });
  }
  // Lancement de la construction de la carte google map
  google.maps.event.addDomListener(window, 'load', initialiser);