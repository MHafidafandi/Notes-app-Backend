const NotesHandler = require("./Handler");
const Routes = require("./Routes");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(Routes(notesHandler));
  },
};
