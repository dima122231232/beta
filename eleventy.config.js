module.exports = function (conf) {
  conf.addPassthroughCopy("src/assets");
  conf.addPassthroughCopy("src/global.css");
  conf.addPassthroughCopy("src/script.js");

  return {
    dir: {
      input: "src",
      includes: "includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
