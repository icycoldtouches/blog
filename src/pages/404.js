import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import Header from "../components/header";
import PageNotFound from "../components/404";
import Grid from "../components/grid";
import SubscirbeFrom from "../components/subscribe";
import Footer from "../components/footer";

export default ({ data }) => {
  return (
    <Layout>
      <Header />
      <main
        className="container"
        role="main"
        itemScope
        itemProp="mainContentOfPage"
      >
        <PageNotFound />
        <Grid data={data.allContentfulBlogPost} isTagPage={false} />
        <SubscirbeFrom />
        <Footer />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query pageNotFoundQuery {
    allContentfulBlogPost(sort: { order: DESC, fields: postDate }, limit: 6) {
      edges {
        node {
          postTitle
          postSlug
          postAuthor {
            authorName
            authorSlug
          }
          postBody {
            postBody
          }
          postCategory {
            categoryTitle
            categorySlug
          }
          postDate
          postDescription {
            postDescription
          }
          postFeaturedImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          updatedAt
        }
      }
    }
  }
`;
