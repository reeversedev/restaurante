const mongoose = require('mongoose');
const config = require('../config/database');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    area : {
        type: String,
        required: true
    },
    cuisines: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    opening: {
        type: String,
        required: true
    },
    closing: {
        type: String,
        required: true
    },
    known_for: {
        type: String,
        required: true
    },
    photo_link: {
        type: String,
        required: true
    },
    cash: {
        type: Boolean,
        required: true
    },
    card: {
        type: Boolean,
        required: true
    },
    e_wallet: {
        type: Boolean,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    contact_website: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    },
    restaurant_password: {
        type: String,
        required: true
    }

})

const restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);

module.exports.addRestaurant = (newRestaurant, callback) => {
    newRestaurant.save(callback);
}