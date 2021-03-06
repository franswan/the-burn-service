// 11ty Config
module.exports = function(eleventyConfig) {

  // Tell 11ty to build these in the output folder '_site'
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');

  // Tell 11ty to ignore the .gitignore
  eleventyConfig.setUseGitIgnore('false');

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
}
