const hapi = require("@hapi/hapi");
const Routes = require("./api/notes/Routes.js");
const NoteServices = require("./services/inMemory/notesServices.js");
const notes = require("./api/notes/index.js");
const notesValidator = require("./validator/notes/index.js");
const init = async () => {
  const notesService = new NoteServices();

  const server = hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        credentials: true,
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: notesValidator,
    },
  });

  await server.start();
  console.log(`Server Berjalan di ${server.info.uri}`);
};

init();
