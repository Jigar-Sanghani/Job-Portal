const express = require('express');
const { createCompany, getAllCompanies, getCompanyById, updateCompany, deleteCompany } = require('../controller/company_controller');
const companyRoute = express.Router();
companyRoute.post('/', createCompany);
companyRoute.get('/', getAllCompanies);
companyRoute.get('/:id', getCompanyById);
companyRoute.put('/:id', updateCompany);
companyRoute.delete('/:id', deleteCompany);
module.exports = companyRoute
