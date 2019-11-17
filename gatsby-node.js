const path = require("path"),
  _ = require("lodash");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      tagsGroup: allContentfulBlogPost(limit: 100) {
        group(field: postCategory___categoryTitle) {
          fieldValue
          totalCount
        }
      }
      postsContentful: allContentfulBlogPost(
        sort: { order: DESC, fields: postDate }
        limit: 5000
      ) {
        nodes {
          postTitle
          postSlug
          updatedAt
          postFeaturedImage {
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          postDescription {
            postDescription
          }
          postDate
          postCategory {
            categoryDescription {
              categoryDescription
            }
            categorySlug
            categoryTitle
          }
          postBody {
            childMarkdownRemark {
              html
            }
          }
          postAuthor {
            authorBio {
              authorBio
            }
            authorImage {
              fluid {
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            authorName
            authorSlug
          }
          createdAt
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running graphql query in gatsby-node.js`
    );
    return;
  }

  const posts = result.data.postsContentful.nodes;
  const blogPostTemplate = path.resolve("src/templates/post.js");

  posts.forEach((node, index) => {
    createPage({
      path: `/${node.postSlug}`,
      component: blogPostTemplate,
      context: {
        slug: node.postSlug,
        next: index === 0 ? null : posts[index - 1].node,
        prev: index === posts.length - 1 ? null : posts[index + 1].node,
        tags: node.postCategory.categoryTitle
      }
    });
  });

  const tags = result.data.tagsGroup.group;
  const postsPerPage = 10;
  const tagsTemplate = path.resolve("src/templates/tags.js");

  tags.forEach(tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((j, i) => {
      createPage({
        path:
          i === 0
            ? `/${_.kebabCase(tag.fieldValue)}/`
            : `/${_.kebabCase(tag.fieldValue)}/${i + 1}`,
        component: tagsTemplate,
        context: {
          slug: `${_.kebabCase(tag.fieldValue)}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          tag: tag.fieldValue,
          count: tag.totalCount
        }
      });
    });
  });
};
