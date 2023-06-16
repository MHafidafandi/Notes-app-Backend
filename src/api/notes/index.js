const NotesHandler = require("./Handler");
const Routes = require("./Routes");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service }) => {
    const notesHandler = new NotesHandler(service);
    server.route(Routes(notesHandler));
  },
};
