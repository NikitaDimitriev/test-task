const mongoose = require('mongoose');

module.exports = mongoose.model('Products', {
    location: { type: String },
    name: { type: String },
    currency:{type:Number}
})