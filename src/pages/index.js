import React from "react";
import { graphql } from "gatsby";
import config from "../../config";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/header";
import Hero from "../components/hero";
import Grid from "../components/grid";
import SubscirbeFrom from "../components/subscribe";
import Footer from "../components/footer";

export default ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title={`Home - ${config.siteTitle}`}
        pathname={location.pathname}
        description={`Furry Canines Team offers practical, real-life tips and training
      advice to help you properly care for your dog.`}
      />
      <Header />
      <main
        className="container"
        role="main"
        itemScope
        itemProp="mainContentOfPage"
      >
        <Hero data={data.allContentfulBlogPost.edges[0]} />
        <Grid data={data.allContentfulBlogPost} isTagPage={false} />
        <SubscirbeFrom />
        <Footer />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allContentfulBlogPost(sort: { order: DESC, fields: postDate }, limit: 9) {
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
