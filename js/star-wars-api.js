export const getStarWarsApi = async() => {
    try{
        let response = await fetch('https://swapi.dev/api/')
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getSpecifcPlanet = async(planetID)=> {
    try{
        let response = await fetch(`https://swapi.dev/api/planets/${planetID}`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getSpecificCharacter = async (peopleID) => {
    try{
        let response = await fetch(`https://swapi.dev/api/people/${peopleID}`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getEyeColor = async (peopleID) => {
    let character = await getSpecificCharacter(peopleID)
    return `${character.name}'s eye color is ${character.eye_color}`;
}

export const getSpecificMovie = async(movieID) => {
    let response = await  fetch(`https://swapi.dev/api/films/${movieID}`)
    let data = await response.json();
    return data
}


export const renderPlanetInfo = async (planet, parent) => {
    const element = document.createElement("div")
    element.classList.add("column")
    element.classList.add("justify-center")
    element.classList.add("align-center")
    element.innerHTML = `
                    <h2>${planet.name}</h2>
                    <a href="${planet.url}" target="_blank">Go to Planet</a>
                    <div class="row justify-center">
                        <div class="column justify-center align-center">
                            <p>Climate: ${planet.climate}</p>
                            <p>Diameter: ${planet.diameter}</p>
                            <p>Population: ${planet.population}</p>
                        </div>
                        <div class="column justify-center align-center">
                            <p>Gravity: ${planet.gravity}</p>
                            <p>Surface Water: ${planet.surface_water}</p>
                            <p>Terrain: ${planet.terrain}</p>
                        </div>
                    </div>
    `;
    parent.appendChild(element)
}

export const renderCharacter = async (character, parent) => {
    const element = document.createElement('div');
    element.classList.add("user-card")
    element.innerHTML = `
        <div class="img-wrapper">
          <img src="https://via.placeholder.com/300x300?" alt="User image" class="avatar">
        </div>
    <h2>${character.name} </h2>
        <p>Eye Color: ${character.eye_color}</p>
            <a href="${character.url}" target="_blank">Go to Profile</a>
    <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove()
    });
    parent.appendChild(element)
}

export const renderFilmInfo = async (film, parent) => {
    const element = document.createElement("div")
    element.classList.add("column")
    element.classList.add("justify-center")
    element.classList.add("align-center")
    element.innerHTML = `
                    <h2>${film.title}</h2>
                    <a href="${film.url}" target="_blank">Go to film</a>
                    <div class="row justify-center">
                        <div class="column justify-center align-center">
                            <p>${film.characters[0]}</p>
                            <p>${film.characters[1]}</p>
                            <p>${film.characters[2]}</p>
                        </div>
                        <div class="column justify-center align-center">
                            <p>${film.planets[0]}</p>
                            <p>${film.planets[1]}</p>
                            <p>${film.planets[2]}</p>
                        </div>
                        <div class="column justify-center align-center">
                            <p>${film.species[0]}</p>
                            <p>${film.species[1]}</p>
                            <p>${film.species[2]}</p>
                        </div>
                    </div>
    `;
    parent.appendChild(element)
}