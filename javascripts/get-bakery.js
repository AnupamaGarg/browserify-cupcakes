"use strict";

// let inventory = require('./cakeInventory');
let inventory = [];
//create initial object to hold all the 'bakery' methods
let bakery = {};


//get inventory
bakery.getInventory = () => {
   //give the inventory back to who called it
   return inventory;
};

bakery.addItem = () => {
   //code to add a new item
};

bakery.removeItem = () => {
   //code to remove an item from data source
};

function fillTheInventory(data) {
   let keys = Object.keys(data);
   keys.forEach((item) => {
      //console.log("keys", keys);
      //add the firebaseID to the object
      data[item].firebaseID = item;
      inventory.push(data[item]);
   });
   return inventory;
}


bakery.loadInventory = () => {
    return fetch(`https://awesome-data-c03ef.firebaseio.com/items.json?orderBy="typeId"&equalTo="1"`)
      .then(res => res.json())
      .then((result) => {
         let newArray = fillTheInventory(result);
         console.log("newArray", newArray);
         return newArray;
      },
      (error) => {
         return error;
      });
};





console.log("bakery", bakery);

module.exports = bakery;