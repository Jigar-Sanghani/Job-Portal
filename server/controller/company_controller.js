const Company = require("../models/Company_schema");

const createCompany = async (req, res) => {
    try {
        let user = await Company.create(req.body)
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating company' });
    }
};
const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        return res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error retrieving companies' });
    }
};

const getCompanyById = async (req, res) => {
    const { id } = req.params;
    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        return res.status(200).json(company);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error retrieving company' });
    }
};

const updateCompany = async (req, res) => {
    const { id } = req.params;
    const { name, description, location, website, contact_email } = req.body;
    try {
        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            { name, description, location, website, contact_email },
            { new: true }
        );
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        return res.status(200).json({ message: 'Company updated successfully', company: updatedCompany });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating company' });
    }
};

const deleteCompany = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCompany = await Company.findByIdAndDelete(id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        return res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting company' })
    }
};

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
};
