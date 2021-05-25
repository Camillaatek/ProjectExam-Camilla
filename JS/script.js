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






    // const url = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true";
    // const blog = document.querySelector(".blog")
    
    // const postList =(posts) => {
    //     console.log(posts);
    //     blog.innerHTML = "";
    //     let postDiv = ``
    //     for(post of posts){
    //         console.log(post)
    //         let images = post._embedded["wp:featuredmedia"]
    //         console.log(images)
    //         for (image of post._embedded["wp:featuredmedia"]){
    //         postDiv = `
    //        <div>
    //         <a href="details.html?id=${post.id}"><h1>${post.title.rendered}</h1></a>
    //         <a href="details.html?id=${post.id}"><img src="${image.source_url}" alt="hei"</a>
    //         </div>
    //         `;
    //         blog.innerHTML += postDiv
    //         }
    
    //     }
    // }
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => postList(data))
    //     .catch(error => blog.innerHTML = "Something went wrong");







    const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=10";
    const loadingButton = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=2&offset=10";
    const posts = document.querySelector(".blog");
    const load = document.querySelector(".loadingButton")
    
   
    const universe = (blogs) => {
         console.log(blogs);
         
         let postDiv = ``
         for (blog of blogs) {
             
             let images = blog._embedded["wp:featuredmedia"]
             console.log(images);
             for (image of blog._embedded["wp:featuredmedia"]){
             postDiv = `  
             <div>
             <a href="details.html?id=${blog.id}"><img src="${image.source_url}" alt="bilde"></a>
             <a href="details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
            </div>
            `;
            posts.innerHTML += postDiv;
            }
        }
    }  
     
    fetch(api)
         .then(response => response.json())
         .then(data => universe(data))
         .catch(error => console.error(error))
    

load.addEventListener("click", ()=> {
    fetch(loadingButton)
    .then(response => response.json())
    .then(data => universe(data))
    .catch(error => console.error(error))
    load.style.display="none"
})


