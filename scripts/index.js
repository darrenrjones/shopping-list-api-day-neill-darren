'use strict';
/* global shoppingList, store api Item $*/

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
});



//

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});