function initMap() {
  const fairfax = { lat: 38.835390, lng: -77.306020 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: fairfax,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">George Mason Lost and Found </h1>' +
    '<div id="bodyContent">' +
    "<p><b>Mason Lost and Found</b>, is a place to report lost items. " +
    "Mason Police accepts limited types of lost or abandoned property at Police & Safety Headquarters in compliance with University Policy 1136 and Code of Virginia §23.1-104. Police & Safety Headquarters is located at 4393 University Drive, Fairfax, next to the Rappahannock Parking garage.</p>  " +
    '<p>Attribution: Mason Lost and Found, <a href="https://police.gmu.edu/programs-and-services/lost-and-found/</a>"'+
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "fairfax",
  });
  const marker = new google.maps.Marker({
    position: fairfax,
    map,
    title: "fairfax (Mason Lost and Found)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
