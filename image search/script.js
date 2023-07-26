const accessKey="kqacVfDcwMbED1DnRZx6bqL4D5U0TYHxuNTYHm6LYsM";

const formEl=document.querySelector('form');
const inputEl=document.getElementById('search-input-id');
const searchResult=document.querySelector('.search-results');
const showMore=document.querySelector('.show-more-btn');
let inputData=""
let page=1;
async function searchImage(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

const response = await fetch(url)
const data= await response.json()
const results =data.results;
console.log(data.status)
if(page===1){
    searchResult.innerHTML="";
}
results.map((result)=>{
    const imageWrapper=document.createElement('div')
    imageWrapper.classList.add("search-result")
    const image=document.createElement("img");
    image.src=result.urls.small
    image.alt=result.alt_description
    const imageLink=document.createElement("a")
    imageLink.href=result.links.html
    imageLink.target="_blank"
    imageLink.textContent=result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResult.appendChild(imageWrapper)
}
    
);
inputData=""
page++;
if(page>1) {
    showMore.style.display="block"
}

}

formEl.addEventListener("submit",e=>{
    e.preventDefault()
    page=1
    searchImage()
})
showMore.addEventListener('click',()=>{
    searchImage()
})