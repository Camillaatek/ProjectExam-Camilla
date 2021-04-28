const url = "https://camillaatek.no/wp-json/wp/v2/posts/"
const blog = document.querySelector(".blog")

const postList =(posts)=>{
    blog.innerHTML = "";
    for(post of posts){
        
        let postDiv = ``
        console.log(post)
        
            postDiv += `
            <ul class="card">
            <h1>${post.title.rendered}</h1>
            <p>${post.content.rendered}</p>
            
            </ul>
            `;
        blog.innerHTML += postDiv
    }
    
    
}
fetch(url)
    .then(response => response.json())
    .then(data => postList(data))
    .catch(error => blog.innerHTML = "Something went wrong");
