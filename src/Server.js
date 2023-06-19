require("dotenv").config();
const hapi = require("@hapi/hapi");
const Jwt = require("@hapi/jwt");
const NoteServices = require("./services/postgres/notesServices.js");
const notes = require("./api/notes/index.js");
const notesValidator = require("./validator/notes/index.js");
const UsersServices = require("./services/postgres/UsersServices.js");
const users = require("./api/users/index.js");
const usersValidator = require("./validator/users/index.js");
const AuthenticationsServices = require("./services/postgres/AuthenticationsServices.js");
const authentication = require("./api/authentication/index.js");
const TokenManager = require("./tokenize/TokenManager.js");
const authenticationsValidator = require("./validator/authentications/index.js");

const init = async () => {
  const notesService = new NoteServices();
  const usersServices = new UsersServices();
  const authenticationsService = new AuthenticationsServices();

  const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
        credentials: true,
      },
    },
  });

  await server.register([
    {
      plugin: Jwt,
    },
  ]);

  server.auth.strategy("notesapp_jwt", "jwt", {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      inValid: true,
      crendentials: {
        id: artifacts.decode.payload.id,
      },
    }),
  });

  await server.register([
    {
      plugin: notes,
      options: {
        service: notesService,
        validator: notesValidator,
      },
    },
    {
      plugin: users,
      options: {
        service: usersServices,
        validator: usersValidator,
      },
    },
    {
      plugin: authentication,
      options: {
        authenticationService: authenticationsService,
        userService: usersServices,
        tokenManager: TokenManager,
        validator: authenticationsValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server Berjalan di ${server.info.uri}`);
};

init();
