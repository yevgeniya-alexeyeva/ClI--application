const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id + "" === contactId);

    if (index === -1) {
      throw new Error("Id incorrect");
    }
    const filteredContacts = contacts.filter(
      (item) => item.id + "" !== contactId
    );
    await updateContacts(filteredContacts);

    return filteredContacts;
  } catch (error) {
    throw error;
  }
}

module.exports = removeContact;
