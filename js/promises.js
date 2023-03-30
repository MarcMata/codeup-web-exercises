import {getGithubUserEvents} from "./github.js";
import {renderLastCommit} from "./github.js"
import {getCommits} from "./github.js";
import {renderLastCommitTwo} from "./github.js";


(async ()=>{
    let user = await getGithubUserEvents("MarcMata")
    console.log(user)
    // Render users
    const usersGrid = document.querySelector("#userGrid");
        renderLastCommit(user, usersGrid)
})();

(async ()=>{
    let user = await getCommits("marcmata", "codeup-web-exercises")
    console.log(user)
    // Render users
    const usersGrid = document.querySelector("#userGrid");
    renderLastCommitTwo(user, usersGrid)
})();