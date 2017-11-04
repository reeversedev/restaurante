var express = require('express');
var router = express.Router();
var zomato = require('zomato');
var Restaurant = require('../models/restaurant');
/* GET home page. */

router.get('/admin/restaurants', function (req, res, next) {
  res.render('admin/restaurants');
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.find(function (err, docs) {
    if(err) {
      console.log(err);
    }
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.json({
      restaurants: productChunks
    });
  });
});

router.post('/admin', function (req, res, next) {

  var Cash, Card, Ewallet;

  if (req.body.cash == undefined) {
    Cash = false;
  } else {
    Cash = true;
  }
  if (req.body.card == undefined) {
    Card = false;
  } else {
    Card = true;
  }
  if (req.body.eWallet == undefined) {
    Ewallet = false;
  } else {
    Ewallet = true;
  }

  var restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
    area: req.body.area,
    cuisines: req.body.cuisines,
    cost: req.body.cost,
    category: req.body.category,
    opening: req.body.opening,
    closing: req.body.closing,
    known_for: req.body.knownFor,
    photo_link: req.body.photo,
    contact_number: req.body.number,
    contact_website: req.body.website,
    restaurant_id: req.body.restaurantId,
    restaurant_password: req.body.restaurantPassword,
    cash: Cash,
    card: Card,
    e_wallet: Ewallet
  });
  restaurant.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(restaurant);
    }
  });
  res.redirect('/admin/restaurants');
});
module.exports = router;