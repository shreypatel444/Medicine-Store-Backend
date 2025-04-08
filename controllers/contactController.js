const Contact = require("../models/Contact");

// Submit Contact Form
exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const contact = new Contact({ firstName, lastName, email, phone, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting message" });
  }
};

// Get All Contact Messages (Optional - For Admin)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact messages" });
  }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};