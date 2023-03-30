import {setFavorite, patchFavorite} from "./movies.js";

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

    let body = {
        "rating": 2
    }
    let response = await patchFavorite(3, body)
    // let data = await response.json();
    // console.log(data);
})();
