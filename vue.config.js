const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "/Users/keis/dev/chat_backend/static", // Djangoのstaticディレクトリへのパス
  indexPath: "/Users/keis/dev/chat_backend/templates/index.html", // Djangoのtemplatesディレクトリへのパス
  publicPath: process.env.NODE_ENV === "production" ? "/static/" : "/",
  filenameHashing: false,
});
