import {setFavorite, patchFavorite, removeMovie, getFavoriteByID, getFavorites, searchFavorite} from "./movies.js";

(async()=>{

    document.querySelector('button').addEventListener('click', async function(){
        const title = document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            title,
            genre,
            rating
        };

        let result = await setFavorite(movieData);
        console.log(result)
    });


    //PATCHING a movie -- adjusting a value in a field
    // let body = {
    //     "rating": 2
    // }
    // let response = await patchFavorite(3, body)


    // let data = await response.json();
    // console.log(data);

    //DELETE A MOVIE
    // await removeMovie(3)

    //get all the favorites
    // let favorites = await getFavorites();
    // console.log(favorites)
    //getFavorite by ID
    // let favorite = await getFavoriteByID(2)

    let searched = await searchFavorite({genre: 'Comedy'})
    console.log(searched)
})();
