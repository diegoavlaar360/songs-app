import { albumsList } from "./albums-list.js";

let counter = 0;

// Image
const imageContainer = document.getElementById('image-container');
const image = document.createElement('img');
imageContainer.appendChild(image);

//Title
const titleContainer = document.getElementById('title-container');
const title = document.createElement('label');
titleContainer.appendChild(title);

// Table
let table = document.getElementById('table');

const buildRow = function(element, i){
    const row = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerText=i;
    row.appendChild(tdId);
    for (const key of Object.keys(element)) {
        const td = document.createElement('td');
        td.innerText=element[key];
        row.appendChild(td);
    }
    table.getElementsByTagName('tbody')[0].appendChild(row);
}

const buildAll = function () {
    //image
    image.src = `./images/${albumsList[counter].coverTitle}.jpg`;
    image.alt = `${albumsList[counter].title}.jpg`;
    //title
    title.innerText = `${albumsList[counter].title} (${albumsList[counter].year})`
    //album
    let array = albumsList[counter].arrayAlbum;
    table.getElementsByTagName("tbody")[0].innerHTML = ""; 
    array.forEach((element, i) => {
        i = i + 1;
        buildRow(element, i);
    });
}

// Controller
document.addEventListener("DOMContentLoaded", function() {
    buildAll();
});

const previous = document.getElementById('previous');
previous.onclick = function(){
    if(counter > 0){
        counter--;
        console.log(counter);
        buildAll();
        next.style.color = "white";
    }else{
        previous.style.color = "rgb(255,255,255,0.5)";
    }
}

const next = document.getElementById('next');
next.onclick = function(){
    if(counter < (albumsList.length - 1)){
        counter++;
        console.log(counter);
        buildAll();
        previous.style.color = "white";
    }else{
        next.style.color = "rgb(255,255,255,0.5)";
    }
}