export default ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["firstName", "lastName", "community"],
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PWD"),
        },
      },
      settings: {
        defaultFrom: "noreply@agendachretien.fr",
        defaultReplyTo: "contact@agendachretien.fr",
      },
    },
  },
});
