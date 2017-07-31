var db = require('./main');
var assert = require('assert');
// TEST
module.exports.test = function () {
  return new Promise(function(resolve, reject) {
    db.open(function(err, db) {
      var collection = db.collection("simple_document_insert_collection_no_safe");
      collection.insert({hello:'test'});
      resolve('ok');
      db.close();
    });
  });
}

module.exports.getAll = function () {
  return new Promise(function(resolve, reject) {
    db.open(function(err, db) {
      db.createCollection('usuario', function(err, collection) {
        assert.equal(null, err);
          collection.find().toArray(function(err, docs) {
            assert.equal(null, err);
            resolve(docs);
            db.close();
          });
        });
      });
  });
}

// INSERT
module.exports.newUser = function (d) {
  return new Promise(function(resolve, reject) {
    db.open(function(err, db) {
      db.createCollection('usuario', function(err, collection) {
        assert.equal(null, err);
          collection.insert(d, function(err, insert){
            resolve(insert);
          });
        });
      });
  });
}

// UPDATE
module.exports.updateUser = function (d) {
  return new Promise(function(resolve, reject) {
    db.open(function(err, db) {
      db.createCollection('usuario', function(err, collection) {
        assert.equal(null, err);
        var id = new require('mongodb').ObjectID('5914852bbd277917e27464b5');
          collection.findOne({_id: id}, function(err, item) {
            assert.equal(null, err);
            var data = {
              edad : item.edad
            };
            collection.update(data, {$set:{edad:d.edad}}, function(err, update){
              resolve(update);
            });
          });
        });
      });
  });
}
