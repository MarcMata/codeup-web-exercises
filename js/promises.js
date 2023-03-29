import {getGithubUserEvents} from "./github.js";
import {renderLastCommit} from "./github.js"


(async ()=>{
    getGithubUserEvents
    let user = await getGithubUserEvents("MarcMata")
    console.log(user)
    // Render users
    const usersGrid = document.querySelector("#userGrid");
        renderLastCommit(user, usersGrid)
})();