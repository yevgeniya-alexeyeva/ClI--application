const fs = require("fs");
const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  const str = JSON.stringify(contacts);
  try {
    await fs.writeFile(contactsPath, str, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  } catch (error) {
    throw error;
  }
};

module.exports = updateContacts;
