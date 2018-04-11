'use strict';
/* global shoppingList, store api Item $*/

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/neill-darren';

  function getItems(callback) {

    $.getJSON(`${BASE_URL}/items`, callback);

  }
  function createItem(name, callback) {
    let newItem = JSON.stringify({
      name: name,
    });

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
    });
  }

  const updateItem = function (id, updateData, callback) {

    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
  };

}());
