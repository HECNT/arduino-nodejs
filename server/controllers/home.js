var Home = require('../models/home');

// GET
module.exports.test = function(){
  return new Promise(function(resolve, reject){
    Home.test()
    .then(function(result){
      resolve(result);
    });
  });
}

module.exports.getAll = function(){
  return new Promise(function(resolve, reject){
    Home.getAll()
    .then(function(result){
      resolve(result);
    });
  });
}

//POST
module.exports.newUser = function(d){
  return new Promise(function(resolve, reject){
    Home.newUser(d)
    .then(function(result){
      resolve(result);
    });
  });
}

module.exports.updateUser = function(d){
  return new Promise(function(resolve, reject){
    Home.updateUser(d)
    .then(function(result){
      resolve(result);
    });
  });
}
