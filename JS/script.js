// const url = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true";
// const blog = document.querySelector(".blog")

// const postList =(posts)=> {
//     blog.innerHTML = "";
//     for(post of posts){
//         let postDiv = ``
//         let images = blog._embedded["wp:featuredmedia"]
//         console.log(post)
//         for (image of blog._embedded["wp:featuredmedia"]){
//         postDiv += `
//             <div>
//             <a href="details.html?id=${blog.id}"><h1>${post.title.rendered}</h1></a>
//             <a href="details.html?id=${blog.id}"><img src="${image.source_url}" alt="hei"</a>
//             </div>
//             `;
//         blog.innerHTML += postDiv;
//         }
//     }
    
    
// }
// fetch(url)
//     .then(response => response.json())
//     .then(data => postList(data))
//     .catch(error => blog.innerHTML = "Something went wrong");






    const url = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true";
    const blog = document.querySelector(".blog")
    
    const postList =(posts) => {
        console.log(posts);
        blog.innerHTML = "";
        let postDiv = ``
        for(post of posts){
            console.log(post)
            let images = post._embedded["wp:featuredmedia"]
            console.log(images)
            for (image of post._embedded["wp:featuredmedia"]){
            postDiv = `
           <div>
            <a href="details.html?id=${post.id}"><h1>${post.title.rendered}</h1></a>
            <a href="details.html?id=${post.id}"><img src="${image.source_url}" alt="hei"</a>
            </div>
            `;
            blog.innerHTML += postDiv
            }
    
        }
    }
    fetch(url)
        .then(response => response.json())
        .then(data => postList(data))
        .catch(error => blog.innerHTML = "Something went wrong");