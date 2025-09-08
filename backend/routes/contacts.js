const express = require('express');
const router = express.Router();
const { createContact, getContacts, deleteContact, replyToContact } = require('../controllers/contactController');
const adminAuth = require('../middleware/adminAuth');

// Public: create a contact submission
router.post('/', createContact);

// Admin: list contact submissions
router.get('/', adminAuth, getContacts);

// Admin: delete a contact submission
router.delete('/:id', adminAuth, deleteContact);

// Admin: reply to a contact submission
router.post('/:id/reply', adminAuth, replyToContact);

module.exports = router;


