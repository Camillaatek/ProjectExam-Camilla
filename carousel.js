const api = "https://camillaatek.no/wp-json/wp/v2/posts?_embed=true&per_page=100&per_page=100";
const posts = document.querySelector(".blog");
const carouselContainer = document.querySelector(".carouselContainer");
const spacegif = document.querySelector(".lasterinn")


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
    .finally(()=> spacegif.style.display="none")



const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');



let counter = 0;
const size = carouselContainer.clientWidth;
console.log(size)

posts.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener('click',()=>{
    if(carouselContainer.clientWidth === 1360 && counter >= 2){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 960 && counter >= 3){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 640 && counter >= 5){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 330 && counter >= 11){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 300 && counter >= 11){
        counter= -1
        posts.style.transform = 'translateX(0px)';
    }
    posts.style.transition = "transform 0.3s ease-in-out";
    counter++;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
});
prevButton.addEventListener('click',()=>{
    if(carouselContainer.clientWidth === 1360 && counter <= 0){
        counter= 3
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 960 && counter <= 0){
        counter= 4
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 640 && counter <= 0){
        counter= 6
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 330 && counter <= 0){
        counter= 12
        posts.style.transform = 'translateX(0px)';
    }
    else if(carouselContainer.clientWidth === 300 && counter <= 0){
        counter= 12
        posts.style.transform = 'translateX(0px)';
    }
    
    posts.style.transition = "transform 0.4s ease-in-out";
    counter--;
    posts.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)

})





