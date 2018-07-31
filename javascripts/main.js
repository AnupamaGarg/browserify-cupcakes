"use strict";

let welcomeTemplate = require('./welcome');
let cakeInventory = require('./get-bakery');
let cakeTemplate = require('./cake-grid');

let welcomeDiv = document.createElement("header");
welcomeDiv.innerHTML = welcomeTemplate.showWelcome();
document.getElementById('welcome').appendChild(welcomeDiv);

function populatePage(sweetArray){
   console.log("sweetArray", sweetArray);
   let newDiv = document.createElement("div");
   newDiv.setAttribute("class", "flex-container");
   let content = sweetArray.map(cakeTemplate.makeGridItem);

   console.log(content.length);

   newDiv.innerHTML = content.join(" ");
   document.getElementById("cake-cards").append(newDiv);
}

//using fetch (which returns a promise)
cakeInventory.loadInventory()
   .then((sweetArray) => {
      populatePage(sweetArray);
   });








