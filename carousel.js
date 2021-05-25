const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true";
const carouselSlide = document.querySelector(".carouselSlide");
const carouselContainer = document.querySelectorAll(".carouselContainer");








const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');



let counter = 0;
const size = carouselSlide.clientWidth;
console.log(size)

posts.style.transform = 'translateX(' + (-size * counter) + 'px)';



nextButton.addEventListener('click',()=>{
    posts.style.transition = "transform 0.4s ease-in-out";
    counter++;
    posts.style.transition = 'translateX(' + (-size * counter) + 'px)';
})
nextButton.addEventListener('click',()=>{
    posts.style.transition = "transform 0.4s ease-in-out";
    counter--;
    posts.style.transition = 'translateX(' + (-size * counter) + 'px)';
})


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

