// Configuration for eleventy.
module.exports = function(eleventyConfig) {
    // Copy these folder to _site wihtout converting the files in them. Add
    // more calls to this function to copy other directories.
    eleventyConfig.addPassthroughCopy("css");
};
