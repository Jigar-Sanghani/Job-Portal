const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  contact_email: {
    type: String,
  },
}, {
  timestamps: true,
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company
