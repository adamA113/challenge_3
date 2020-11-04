const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true, useUnifiedTopology: true });
let repoSchema = mongoose.Schema({
  id: Number,
  fullName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  phoneNumber: Number,
  creditCardNumber: Number,
  expiryDate: Date,
  cvv: Number,
  BillingZipCode: Number
});


let userData = mongoose.model('userData', repoSchema);


let saveData = (data) => {
  var customData = {
    id: ,
    fullName: ,
    email: ,
    address: ,
    city: ,
    state: ,
    zipCode: ,
    phoneNumber: ,
    creditCardNumber: ,
    expiryDate: ,
    cvv: ,
    BillingZipCode: 
  }
  var datab = new Repo(customData);

  datab.save((err,result)=>{
    if (err) {
      console.log(err);
    }
    else {
      console.log(result)
    }
  });

}

module.exports.sasaveDatave = saveData;