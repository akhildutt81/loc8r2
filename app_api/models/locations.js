var mongoose = require( 'mongoose' );
var reviewSchema = new mongoose.Schema({
  author: {type:String, required:true},
  rating: {type: Number, required: true, min: 0, max: 5},
  reviewText: {type: String, required: true},
  createdOn: {type: Date, default: Date.now}
});
var openingTimeSchema = new mongoose.Schema({
  days: {type: String, "default":"Monday to Friday"},
  opening: String,
  closing: String,
  closed: {type: Boolean, "default":true}
});
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "default": 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: [Number], index: '2dsphere',required:true},
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});
var userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    reuqired:true
  }
})

mongoose.model('location', locationSchema)

mongoose.model('users',userSchema)