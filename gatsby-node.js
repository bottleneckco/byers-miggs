/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const personalities = require("./src/personalities.json");
const convertToSlug = require("./src/utils/generate-slug");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  personalities.forEach(p => {
    createPage({
      path: `/personality/${convertToSlug(p.title)}`,
      component: path.resolve("./src/templates/personality.js"),
      context: {
        personality: p,
        image: p.image,
      },
    });
  });
};
