function initMap() {
  const uluru = { lat: 40.83536424631581, lng: 14.504111244769277 };
  const ulurus = { lat: 40.83961395085768, lng: 14.516777740354858 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  const contentString =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Fratelli Grassia</h2><br><br>' +
    '<div>' +
    "<p><b>Fratelli Grassia</b> è forse la migliore pizzeria di <b>San Giuseppe Vesuviano</b>. Da non perdere!!! " +
    "</div>" +
    "</div>";
	const infowindow = new google.maps.InfoWindow({
    content: contentString,
	});
	const marker = new google.maps.Marker({
    position: uluru,
	icon: {
      path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
      scale: 4,
    },
    map,
    title: "San Giuseppe Vesuviano",
	});
	marker.addListener("click", () => {
    infowindow.open(map, marker);
	});

const contenttring =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">BifBurger</h2><br><br>' +
    '<div>' +
    "<p><b>BifBurger</b> fa dei panini stratosferici, ca song a <b>fin ro munn</b>. Cinque stelle a mani basse!!! " +
    "</div>" +
    "</div>";
	const infoindow = new google.maps.InfoWindow({
    content: contenttring,
	});
	const cosa = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const ccsa = "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png" ;
	const markr = new google.maps.Marker({
    position: { lat: 40.83961395085768, lng: 14.516777740354858 },
	icon: cosa,
    map,
    title: "gg",
	});
	markr.addListener("click", () => {
    infoindow.open(map, markr);
	});
	const contentring =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Falangone</h2>' +
    '</div>' +
    "<div><p>Altra <b>pizzeria</b> di San Giuseppe, autore di una davvero ottima <b>pizza</b>. Da provare! " +
    "</div>" ;
	const infondow = new google.maps.InfoWindow({
    content: contentring,
	});
	const marr = new google.maps.Marker({
    position: { lat: 40.82919541309587, lng: 14.488752305440139 },
    map,
    title: "g",
	});
	marr.addListener("click", () => {
    infondow.open(map, marr);
	});
	
	
	
	 const contetring =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Santuario</h2><br><br>' +
    '<div>' +
    "<p>Il <b>Santuario </b> di San Giuseppe Vesuviano è la chiesa più bella di tutto il vesuviano a mani basse!!! " +
    "</div>" +
    "</div>";
	const infondo = new google.maps.InfoWindow({
    content: contetring,
	});
	const mar = new google.maps.Marker({
    position: { lat: 40.83674829161241, lng: 14.504288278218102 },
	icon: cosa,
    map,
    title: "San Giuseppe Vesuviano",
	});
	mar.addListener("click", () => {
    infondo.open(map, mar);
	});
	
	
	const cont =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Comune</h2><br><br>' +
    '<div>' +
    "<p>Il <b>Comune </b> di San Giuseppe Vesuviano è il luogo dove risiedono gli impiegati più svogliati del paese. " +
    "</div>" +
    "</div>";
	const inf = new google.maps.InfoWindow({
    content: cont,
	});
	const marxista = new google.maps.Marker({
    position: { lat: 40.83473601472694, lng: 14.505995724901828 },
	icon: ccsa,
    map,
    title: "San Giuseppe Vesuviano",
	});
	marxista.addListener("click", () => {
    inf.open(map, marxista);
	});
	
	
	const contering =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Yogurtlandia</h2><br><br>' +
    '<div>' +
    "<p><b>Yogurtlandia </b> è l'autore delle migliori crepes e dei migliori yogurt di San Giuseppe Vesuviano!! " +
    "</div>" +
    "</div>";
	const infdo = new google.maps.InfoWindow({
    content: contering,
	});
	const ma = new google.maps.Marker({
    position: { lat: 40.833041472350146,  lng: 14.50481719936024 },
	icon: cosa,
    map,
    title: "Sseppe Vesuviano",
	});
	ma.addListener("click", () => {
    infdo.open(map, ma);
	});
	
	
	
	
	
	const contring =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Da Gino</h2><br><br>' +
    '<div>' +
    "<p><b>Da Gino </b> è una delle tante pizzerie di San Giuseppe Vesuviano. Discreto, ma non ottimo. " +
    "</div>" +
    "</div>";
	const indo = new google.maps.InfoWindow({
    content: contring,
	});
	const maa = new google.maps.Marker({
    position: { lat: 40.83616156202351, lng: 14.504720718024148 },
    map,
    title: "Sseppe Vesuviano",
	});
	maa.addListener("click", () => {
    indo.open(map, maa);
	});
	
	
	
	
	
	
	const conring =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Leonardo</h2><br><br>' +
    '<div>' +
    "<p><b>Leonardo </b> è forse uno dei ristoranti più celebri di San Giuseppe Vesuviano. Qui, mia nonna ha festeggiato gli 80 anni. " +
    "</div>" +
    "</div>";
	const ino = new google.maps.InfoWindow({
    content: conring,
	});
	const maas = new google.maps.Marker({
    position: { lat: 40.83208682380306, lng: 14.532673831114957 },
    map,
    title: "Sseppe Vesuviano",
	});
	maas.addListener("click", () => {
    ino.open(map, maas);
	});
	
	
	
	
	
	const coning =
    '<div class="pene">'+
    '<h2 style="color:red" align="center">Santa Maria La Scala</h2><br><br>' +
    '<div>' +
    "<p>La chiesa di <b>Santa Maria La Scala </b> è piccola, ma grande dentro. Questa frazione di San Giuseppe Vesuviano è la più popolosa. " +
    "</div>" +
    "</div>";
	const inop = new google.maps.InfoWindow({
    content: coning,
	});
	const maasi = new google.maps.Marker({
    position: { lat: 40.826786090403544, lng: 14.487826566946959 },
	icon: cosa,
    map,
	});
	maasi.addListener("click", () => {
    inop.open(map, maasi);
	});
}