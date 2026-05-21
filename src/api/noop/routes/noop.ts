export default {
  routes: [
    {
      method: "GET",
      path: "/noop",
      handler: "noop.index",
      config: {
        auth: false,
      },
    },
  ],
};
