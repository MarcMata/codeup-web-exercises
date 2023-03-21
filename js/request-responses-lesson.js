
//traditional promise method
const getCharacter = (people = 1) => {

    return fetch(`https://swapi.dev/api/people/${people}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            return data;
        })
        .catch(error => {
            console.log(error.message);
    });
}


getCharacter().then(people => {
    //continue movie data
    console.log(people)
});

//asynch await method
async function getPeopleAsync(people = 1){
    try {
        let response = await fetch(`https://swapi.dev/api/people/${people}`)
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }

}

getPeopleAsync()

// getMovieAsych()

//asynch await method arrow


// let newHope = getMovieB(1);

const getCharacterB = async (people = 1) => {
    let response = await fetch(`https://swapi.dev/api/people/${people}`)
    return await response.json();
}


(async()=>{

    let lukeSkywalker = await getCharacterB(75)
    console.log(lukeSkywalker);
})();