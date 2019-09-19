export default {
  Query: {
    users: async (parent, args, { userModel, req }) => {
      // console.log(Object.keys(req));
      console.log(req.sessionStore);
      return await userModel.find({}, (err, users) => users);
    },

    user: async (parent, args, {}) => {
      return { _id: 'TEST_ID', name: 'TEST_NAME' };
    }
  }
};
