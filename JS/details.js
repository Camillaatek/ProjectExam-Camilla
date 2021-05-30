// const getUrl = document.location.search
// console.log (getUrl)

// const para = new URLSearchParams (getUrl);
// const id = para.get("id")
// console.log(id)

// const postList = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
// const posts = document.querySelector(".blog");

    
//     const postList =(posts) => {
//         console.log(posts)
//         blog.innerHTML = "";
        
            
//            media._embedded["wp:featuredmedia"]
//             for (images of blog){
//                 console.log(images);
//             postDiv = `
//             <div>
//             <h2>${details.title.rendered}</h2>
//             <p>${post.content.rendered}</p>
//             </div>
//             `;
//             blog.innerHTML += postDiv;
//             }
    
//         }
    
//     fetch(url)
//         .then(response => response.json())
//         .then(data => postList(data))
//         .catch(error => blog.innerHTML = "Something went wrong");










// const getUrl = document.location.search;
// console.log (getUrl)

// const para = new URLSearchParams (getUrl);
// const id = para.get("id");
// console.log(id)

// const url = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
// const posts = document.querySelector(".blog");

    
//     const blogpost =(blog) => {
//         console.log(blog)
//         posts.innerHTML = "";
//         let images = blog._embedded["wp:featuredmedia"]
//             for (image of blog._embedded["wp:featuredmedia"]){
//             postDiv = `
//             <div>
//             <a href="details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
//             <a href="details.html?id=${blog.id}"><img src="${image.source_url}" alt="yeet"></a>
//             <p>${blog.content.rendered}</p>
//             </div>
//             `;
//             posts.innerHTML += postDiv;
//             }
    
//         }
    
//     fetch(url)
//         .then(response => response.json())
//         .then(data => blogpost(data))
//         .catch(error => console.error(error))






// const query = document.location.search;
// const parameter = new URLSearchParams(query);
// const id = parameter.get("id");

// const api = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
// const output = document.querySelector('#output');

// fetch(api)
// .then (respons => respons.json())
// .then (data => listPosts(data))
// .error (error => console.error("This happened: "+error));

// function listPosts (posts) {
//   for (let post of posts) {
//     if (post.featured_media > 0) {
//       let imgSrc = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//       let altTxt = post._embedded["wp:featuredmedia"][0].alt_text;
//       output.innerHTML += `<div><img src="${imgSrc}" alt="${altTxt}"></div>`;     
//     } else {
//       output.innerHTML += `<div>[Post id=${post.id} does not have a featured image]</div>`;   
//     }
//   }
// }



const getUrl = document.location.search;
const para = new URLSearchParams (getUrl);
const id = para.get("id")




const api = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const posts = document.querySelector(".blog");
const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const spacegif = document.querySelector(".lasterinn")

 fetch(api)
     .then(response => response.json())
     .then(data => universe(data))
     .catch(error => console.error(error))
     .finally(()=> spacegif.style.display="none")

const universe = (blog) => {
     console.log(blog);
     posts.innerHTML = "";
     document.title  = `The Universe | ${blog.title.rendered}`
     let images = blog._embedded["wp:featuredmedia"]
     for (image of blog._embedded["wp:featuredmedia"]){
        postDiv = ` 
        <div class="info">
        <div class="top">
        <h1>${blog.title.rendered}</h1>
        <img onClick="funk()" class= "buildfunk" src="${image.source_url}" alt="image">
        </div>
        <p>${blog.content.rendered}</p>
       </div>
       `;
       posts.innerHTML += postDiv;
       modal.innerHTML = `<img class="img-click" src="${image.source_url}" alt="">`
       }
}

const funk = ()=>{
     const build = document.querySelector(".buildfunk");
     modal.style.display = "flex";
     body.classList.add("modalbuild");
     document.documentElement.add = "0";
}

modal.addEventListener("click", ()=>{
     modal.style.display = "none";
     body.classList.remove("modalbuild")
});

