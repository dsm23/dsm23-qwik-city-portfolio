export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-url": {
      url: "copy",
      // basePath: path.resolve("node_modules/geist/dist/fonts/"),
      assetsPath: "true",
      // useHash: true,
    },
  },
};
