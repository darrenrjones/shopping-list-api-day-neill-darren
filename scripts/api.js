'use strict';
/* global shoppingList, store api Item $*/

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/neill-darren';

  function getItems(callback) {
    callback('api working');

    $.getJSON('https://thinkful-list-api.herokuapp.com/neill-darren/items', callback);

  }
  return {
    getItems,
  };

  

}());
