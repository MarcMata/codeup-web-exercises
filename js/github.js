export const getGithubUsers = async() => {
    try{
        let response = await fetch('https://api.github.com/users')
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
//traditional way
    // return fetch("https://api.github.com/users")
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error=> console.log(error));
}

export const renderGithubUser = (user, parent) => {
    const element = document.createElement("div");
    element.classList.add("user-card");
    element.innerHTML = `
        <div class="img-wrapper">
          <img src="${user.avatar_url}" alt="User image" class="avatar">
        </div>
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove()
    });
    parent.appendChild(element)
};

export const getSingleGithubUser = async(username) => {
    try{
        let response = await fetch(`https://api.github.com/users/${username}`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getGithubUserEvents = async(username) => {
    try{
        let response = await fetch(`https://api.github.com/users/${username}/events/public`)
        let data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
    }
}

export const renderLastCommit = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add("user-data")
    element.innerHTML = `
    <h2>${user.actor.display_login} last commit is ${user.created_at}</h2>
    <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove()
    });
    parent.appendChild(element)
};

export const getCommits = async(owner,repo) => {
    try{
        let response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
        let data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
    }
}

export const renderLastCommitTwo = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add("user-card")
    element.innerHTML = `
        <div class="img-wrapper">
          <img src="${user.author.avatar_url}" alt="User image" class="avatar">
        </div>
    <h2>${user.commit.author.name} </h2>
        <p>Last commit: ${user.commit.author.date}</p>
            <a href="${user.author.html_url}" target="_blank">Go to Profile</a>
    <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove()
    });
    parent.appendChild(element)
};

// How to set to a database
// export const setGithubUser = async(user) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     };
//     try{
//         let response = await fetch('https://api.github.com/users')
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }