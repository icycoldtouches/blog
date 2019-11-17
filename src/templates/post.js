import React from "react";
import { graphql } from "gatsby";
import config from "../../config";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/header";
import Post from "../components/post";
import About from "../components/sidebar/about";
import SubscirbeFrom from "../components/subscribe";
import Footer from "../components/footer";

export default ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title={`${data.contentfulBlogPost.postTitle} - ${config.siteTitle}`}
        pathname={location.pathname}
        desctiption={data.contentfulBlogPost.postDescription.postDescription}
        image={data.contentfulBlogPost.postFeaturedImage.fluid.src}
        article
      />
      <Header />
      <div className="container container__flex">
        <Post
          title={data.contentfulBlogPost.postTitle}
          categorySlug={data.contentfulBlogPost.postCategory.categorySlug}
          categoryTitle={data.contentfulBlogPost.postCategory.categoryTitle}
          postDate={data.contentfulBlogPost.postDate}
          authorSlug={data.contentfulBlogPost.postAuthor.authorSlug}
          authorName={data.contentfulBlogPost.postAuthor.authorName}
          postFeaturedImage={data.contentfulBlogPost.postFeaturedImage.fluid}
          postDescription={
            data.contentfulBlogPost.postDescription.postDescription
          }
          html={data.contentfulBlogPost.postBody.childMarkdownRemark.html}
        />
      </div>
      <div className="container">
        <About
          image={data.contentfulBlogPost.postAuthor.authorImage.fluid}
          alt={data.contentfulBlogPost.postAuthor.authorName}
          name={data.contentfulBlogPost.postAuthor.authorName}
          slug={data.contentfulBlogPost.postAuthor.authorSlug}
          bio={data.contentfulBlogPost.postAuthor.authorBio.authorBio}
        />
        <SubscirbeFrom />
        <Footer />
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(postSlug: { eq: $slug }) {
      postAuthor {
        authorName
        authorSlug
        authorBio {
          authorBio
        }
        authorImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      postBody {
        childMarkdownRemark {
          html
        }
      }
      postCategory {
        categorySlug
        categoryTitle
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
      postSlug
      postTitle
    }
  }
`;
