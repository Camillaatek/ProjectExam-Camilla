const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams (getUrl);
const id = para.get("id")
console.log(id)

const postList = `https://camillaatek.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const posts = document.querySelector(".blog");

    
    const postList =(posts) => {
        console.log(posts)
        blog.innerHTML = "";
        
            
           media._embedded["wp:featuredmedia"]
            for (images of blog){
                console.log(images);
            postDiv = `
            <div>
            <h2>${details.title.rendered}</h2>
            <p>${post.content.rendered}</p>
            </div>
            `;
            blog.innerHTML += postDiv;
            }
    
        }
    
    fetch(url)
        .then(response => response.json())
        .then(data => postList(data))
        .catch(error => blog.innerHTML = "Something went wrong");