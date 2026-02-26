module.exports = () => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "localhost",
        port: 1337,
        ignoreTLS: true,
      },
    },
  },
});
