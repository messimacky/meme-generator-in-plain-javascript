
const memeAuthor = document.querySelector('.meme-generator meme-author');
const image = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-generator .meme-title');
const myBtn = document.querySelector('.meme-generator .generate-meme-btn');


const updateMeme =(url, title, author)=>{
    image.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}` ;
}


const memeGenerator =()=> {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateMeme(data.url, data.title, data.author);
    })
}


myBtn.addEventListener("click", memeGenerator);
memeGenerator();