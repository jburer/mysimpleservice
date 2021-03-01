var config = {
  expressPort: 3100,
  client: {
    mongodb: {
      defaultDatabase: "mysimpledb",
      defaultCollection: "shindigs",
      defaultUri: "mongodb://localhost:27017"
    }
  }
};

module.exports = config;
