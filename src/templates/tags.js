import React from "react";
import { graphql } from "gatsby";
import config from "../../config";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/header";
import Category from "../components/category";
import Grid from "../components/grid";
import SubscirbeFrom from "../components/subscribe";
import Footer from "../components/footer";
import Pagination from "../components/pagination";

export default ({ data, pageContext, location }) => {
  return (
    <Layout>
      <SEO
        title={`${pageContext.tag} - ${config.siteTitle}`}
        pathname={location.pathname}
        description={
          data.contentfulCategories.categoryDescription.categoryDescription
        }
      />
      <Header />
      <main
        className="container"
        role="main"
        itemScope
        itemProp="mainContentOfPage"
      >
        <Category
          tag={pageContext.tag}
          categoryDescription={
            data.contentfulCategories.categoryDescription.categoryDescription
          }
        />
        <Grid data={data.allContentfulBlogPost} isTagPage={true} />
        <Pagination pageContext={pageContext} />
        <SubscirbeFrom />
        <Footer />
      </main>
    </Layout>
  );
};

export const tagsQuery = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      limit: $limit
      skip: $skip
      filter: { postCategory: { categoryTitle: { eq: $tag } } }
    ) {
      edges {
        node {
          updatedAt
          postTitle
          postSlug
          postFeaturedImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          postDescription {
            postDescription
          }
          postDate
          postCategory {
            categorySlug
            categoryTitle
            categoryDescription {
              categoryDescription
            }
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
                ...GatsbyContentfulFluid
              }
            }
            authorSlug
            authorName
          }
          createdAt
        }
      }
    }
    contentfulCategories(categoryTitle: { eq: $tag }) {
      categoryTitle
      categorySlug
      categoryDescription {
        categoryDescription
      }
    }
  }
`;
