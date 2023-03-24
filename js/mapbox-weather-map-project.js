function debounce(func, delay) {
    let timer;
    return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

document.querySelector("#zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.querySelector("#zoom").value);
});
let markerCoords = []
//stores the set marker button in a variable
let setMarkerButton = document.querySelector("#setMarkerButton")
    setMarkerButton.addEventListener('click',event=>{
    event.preventDefault();
    const address = document.querySelector('#setMarker').value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        console.log(coords)
        //individually grabs the lat long and pushes them into an outside variable
        let mapboxLat = coords[1],
            mapboxLng = coords[0];
        markerCoords = [mapboxLat, mapboxLng]
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        const popup = new mapboxgl.Popup()
            .setHTML(`<p class="popup">${address}</p>`);
        newMarker.setPopup(popup);
        map.setCenter(coords);
        //when a new marker is set, remove the current marker
        console.log(markerCoords[0])
        console.log(markerCoords[1])
        setMarkerButton.addEventListener('click', event=>{
           newMarker.remove();
        });
        weatherMapDaily(markerCoords[0],markerCoords[1])
        weatherMap5Day3Hour(markerCoords[0], markerCoords[1])
    });
});

document.querySelector("#noMoreMarkersButton").addEventListener('click',event=> {
    event.preventDefault();
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = "none"
    });
});



