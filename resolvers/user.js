export default {
  Query: {
    users: async (parent, args, {}) => {
      return [{ _id: 'TEST_ID', name: 'TEST_NAME' }];
    },

    user: async (parent, args, {}) => {
      return { _id: 'TEST_ID', name: 'TEST_NAME' };
    }
  }
};
