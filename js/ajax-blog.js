const getBlogs = async (posts) => {
    let blogPosts = document.querySelector("#posts")

    // blogPosts.innerHTML = ``
    let response = await fetch(`data/blog.json`)
    let returnedPosts = await response.json();
    returnedPosts.forEach(function(e){
        let row = document.createElement('div')
        row.innerHTML = `
                <h3>${e.title}</h3>
                <p>${e.content}</p>
                <p>Categories: ${e.categories}</p>
                <p>Posted: ${e.date}</p>
            `;
        blogPosts.appendChild(row)
    });
}

(async()=>{
    let posts = await getBlogs();
})();