const InvariantError = require("../../exceptions/InvariantError");
const {
  postAuthenticationPayloadSchema,
  putAuthenticationPayloadSchema,
  deleteAuthenticationPayloadSchema,
} = require("./schema");

const authenticationsValidator = {
  validatePostAuthenticationPayload: (payload) => {
    const validationResult = postAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw InvariantError(validationResult.error.message);
    }
  },

  validatePutAuthenticationPayload: (payload) => {
    const validationResult = putAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw InvariantError(validationResult.error.message);
    }
  },

  validateDeleteAuthenticationPayload: (payload) => {
    const validationResult =
      deleteAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw InvariantError(validationResult.error.message);
    }
  },
};

module.exports = authenticationsValidator;
