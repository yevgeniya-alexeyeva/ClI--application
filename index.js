const contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      (async () => {
        const contactsList = await contacts.listContacts();
        console.table(contactsList);
      })();

      break;

    case "get":
      (async () => {
        const contact = await contacts.getContactById(id);
        console.log(contact);
      })();

      break;

    case "add":
      (async () => {
        const newContacts = await contacts.addContact(name, email, phone);
        console.table(newContacts);
      })();

      break;

    case "remove":
      (async () => {
        const newContacts = await contacts.removeContact(id);
        console.table(newContacts);
      })();

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
