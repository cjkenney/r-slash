'use strict';

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    suggest([
      {content: text + " one", description: "first redd"}
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    alert('do you want to go to r/' + text + ' ?');
  });