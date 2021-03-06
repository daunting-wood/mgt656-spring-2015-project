'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Daunting Wood Events',
    'tagline': 'Your one-stop shop for event planning.',
    'events' : [],
    //'showRSVP' : false
  
  };
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
  }
  }
  
  //if(Math.random() > 0.5){
  //  contextData.showRSVP = true;
  //}
  
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
