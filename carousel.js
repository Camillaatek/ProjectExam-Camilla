const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=100&per_page=100";
const posts = document.querySelector(".blog");
const carouselContainer = document.querySelector(".carouselContainer");



const universe = (blogs) => {
    console.log(blogs);
    
    let postDiv = ``
    for (blog of blogs) {
        
        let images = blog._embedded["wp:featuredmedia"]
        console.log(images);
        for (image of blog._embedded["wp:featuredmedia"]){
        postDiv = `  
        <div class ="slides">
        <a href="HTML/details.html?id=${blog.id}"><img src="${image.source_url}" alt="bilde"></a>
        <a href="HTML/details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
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




const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');



let counter = 0;
const size = carouselContainer.clientWidth;
console.log(size)

posts.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener('click',()=>{
    if(counter >= 4){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    posts.style.transition = "transform 0.4s ease-in-out";
    counter++;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
});
prevButton.addEventListener('click',()=>{
    if(counter <= 0){
        counter= 3
        posts.style.transform = 'translateX(0px)';
        console.log(counter)
    }
    posts.style.transition = "transform 0.4s ease-in-out";
    counter--;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)

})



