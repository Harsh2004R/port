const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');
const adminAuth = require('../middleware/adminAuth');

// Public: create a contact submission
router.post('/', createContact);

// Admin: list contact submissions
router.get('/', adminAuth, getContacts);

module.exports = router;


