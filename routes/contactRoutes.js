const express = require("express");
const {
  submitContactForm,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

router.post("/", submitContactForm);
router.get("/", getAllContacts); // Optional: Admin can view all contact messages

router.delete("/:id", deleteContact);

module.exports = router;
