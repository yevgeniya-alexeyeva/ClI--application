const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");
const { v4: uuidv4 } = require("uuid");

async function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
  };
  try {
    const contacts = await listContacts();
    const newContacts = [...contacts, newContact];
    await updateContacts(newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
}

module.exports = addContact;
