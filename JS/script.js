
    const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=10";
    const loadingButton = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=2&offset=10";
    const posts = document.querySelector(".blog");
    const load = document.querySelector(".loadingButton")
    const spacegif = document.querySelector(".lasterinn")
   
    const universe = (blogs) => {
         console.log(blogs);
         
         let postDiv = ``
         for (blog of blogs) {
             
             let images = blog._embedded["wp:featuredmedia"]
             console.log(images);
             for (image of blog._embedded["wp:featuredmedia"]){
             postDiv = `  
             <div class= posts>
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
         .finally(()=> spacegif.style.display="none")

load.addEventListener("click", ()=> {
    fetch(loadingButton)
    .then(response => response.json())
    .then(data => universe(data))
    .catch(error => console.error(error))
    load.style.display="none"
})


