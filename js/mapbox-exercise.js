document.querySelector("#zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.querySelector("#zoom").value);
});

document.querySelector("#setMarkerButton").addEventListener('click',event=>{
    event.preventDefault();
    const address = document.querySelector('#setMarker').value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        console.log(coords)
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)

            .addTo(map);
        const popup = new mapboxgl.Popup()
            .setHTML(`<p class="popup">${address}</p>`);
        newMarker.setPopup(popup);
        map.setCenter(coords);
    });
});


const restarauntsArr = [
{
    name: "Taco Palenque",
    about: "Taco Palenque is a Mexican cuisine restaurant chain in South Texas and northern Tamaulipas, Mexico. The restaurant is headquartered in Laredo, Texas and was established in 1987.",
    address: "1002 NE Interstate 410 Loop, San Antonio, TX 78209",
    LngLat: [-98.459361, 29.515619]
},
{
    name: "Whataburger",
    about: "Whataburger is an American regional fast food restaurant chain, headquartered and based in San Antonio, Texas, that specializes in hamburgers. The company, founded by Harmon Dobson and Paul Burton, opened its first restaurant in Corpus Christi, Texas, in 1950.",
    address: "412 E Commerce St, San Antonio, TX 78205",
    LngLat:[-98.488625, 29.423796]
},
{
    name: "La Colmena",
    about: "La Colmena is a restaraunt owned by two brothers started around 2019. They serve fruit cups, elote, burgers, hot dogs, and even tamales. They have an assortment of fruit-related drinks.",
    address: "15171 Judson Rd #105, San Antonio, TX 78259",
    LngLat:[-98.37377, 29.57976]
},
]

restarauntsArr.forEach((e) => {
    const element = document.createElement('div');
    element.className = 'marker';
    const restaurants = new mapboxgl.Marker(element)
        .setLngLat(e.LngLat)
        .addTo(map)
    const popup = new mapboxgl.Popup()
        .setHTML(`
                <h4>${e.name}</h4>
                <p class="popup">${e.about}</p>
                `
        );
    restaurants.setPopup(popup);

    // document.querySelector("#noMoreMarkersButton").addEventListener('click',event=>{
    //     event.preventDefault();
    //     restaurants.remove();
    // });
});
document.querySelector("#noMoreMarkersButton").addEventListener('click',event=> {
    event.preventDefault();
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
       svg.style.display = "none"
    });
});



