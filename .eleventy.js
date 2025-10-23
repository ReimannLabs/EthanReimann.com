module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"css": "css"});
  eleventyConfig.addPassthroughCopy({"images": "images"});

  // Create a `posts` collection from files in src/posts/
  eleventyConfig.addCollection("posts", function(collectionApi) {
    // Collect Markdown files under src/posts (including subfolders)
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  // Create a unique tag list (array of tag strings)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach(item => {
      if(item.data && item.data.tags) {
        item.data.tags.forEach(t => tagSet.add(t));
      }
    });
    return [...tagSet].sort();
  });

  // Simple slug filter for tag URLs
  eleventyConfig.addFilter("slug", function(str) {
    if(!str) return "";
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  });

  // Simple date filter for Nunjucks templates: formats to 'Oct 23, 2025'
  eleventyConfig.addFilter("date", function(dateObj) {
    if(!dateObj) return "";
    let d = new Date(dateObj);
    try {
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return d.toDateString();
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
