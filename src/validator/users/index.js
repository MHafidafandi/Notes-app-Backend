const InvariantError = require("../../exceptions/InvariantError");
const { userPayloadSchema } = require("./schema");

const usersValidator = {
  validateUsersPayload: (payload) => {
    const validationResult = userPayloadSchema.validate(payload);

    if (validationResult.error) {
      return new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = usersValidator;
