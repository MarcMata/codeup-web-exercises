import {
    getSpecifcPlanet,
    getEyeColor,
    getSpecificMovie,
    renderPlanetInfo,
    getSpecificCharacter,
    renderCharacter, renderFilmInfo
} from "./star-wars-api.js";


/*
    TODO: Using separation of concern principles, module syntax async/await,
        create a series of code that:
         - uses the Star wars API  https://swapi.dev/api/
         - console logs a specific planet
         - console logs the eye color of a specific character
         - returns all of the data on a specific movie
         *BONUS* - Add it onto the DOM
 */

(async ()=> {
    let planet = await getSpecifcPlanet(3);
    console.log(planet)

    const planetInfo = document.querySelector('#planetInfo')
    renderPlanetInfo(planet, planetInfo)

    let character = await getSpecificCharacter(1);
    console.log(character)

    const userGrid = document.querySelector("#userGrid")
    renderCharacter(character, userGrid)

    let film = await getSpecificMovie(1);
    console.log(film)

    const filmInfo = document.querySelector("#filmInfo")
    renderFilmInfo(film, filmInfo)

})();