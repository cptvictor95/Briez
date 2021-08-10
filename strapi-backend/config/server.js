module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "85dfbbdaa2236030e35932334d15b019"),
    },
  },
});
