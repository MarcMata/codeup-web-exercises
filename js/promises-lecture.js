import {getGithubUsers} from "./github.js";
import {renderGithubUser} from "./github.js";

(async ()=>{
   let users = await getGithubUsers()
    console.log(users)
    const usersGrid = document.querySelector("#userGrid");
    users.forEach(function(user){
        renderGithubUser(user, usersGrid)
    });
    //Render users
})();