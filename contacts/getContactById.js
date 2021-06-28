const listContacts = require("./listContacts");

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();

    const findContact = contacts.find((item) => item.id + "" === contactId);

    if (!findContact) {
      throw new Error("ContactId incorrect");
    }
    return findContact;
  } catch (error) {
    throw error;
  }
}

module.exports = getContactById;
