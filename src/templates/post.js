import React from 'react';
import { graphql } from 'gatsby';
import config from '../../config';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/header';
import Post from '../components/post';
import Share from '../components/share';

import SubscirbeFrom from '../components/subscribe';
import Footer from '../components/footer';

export default ({ data, location }) => {
    return (
        <Layout>
            <SEO
                title={`${data.contentfulBlogPost.postTitle} - ${config.siteTitle}`}
                pathname={location.pathname}
                description={
                    data.contentfulBlogPost.postDescription.postDescription
                }
                image={data.contentfulBlogPost.postFeaturedImage.fluid.src}
                article
            />
            <Header />
            <div className='container container__flex'>
                <Post
                    title={data.contentfulBlogPost.postTitle}
                    categorySlug={
                        data.contentfulBlogPost.postCategory.categorySlug
                    }
                    categoryTitle={
                        data.contentfulBlogPost.postCategory.categoryTitle
                    }
                    postDate={data.contentfulBlogPost.postDate}
                    updatedAt={data.contentfulBlogPost.updatedAt}
                    authorSlug={data.contentfulBlogPost.postAuthor.authorSlug}
                    authorName={data.contentfulBlogPost.postAuthor.authorName}
                    postFeaturedImage={
                        data.contentfulBlogPost.postFeaturedImage.fluid
                    }
                    postDescription={
                        data.contentfulBlogPost.postDescription.postDescription
                    }
                    html={
                        data.contentfulBlogPost.postBody.childMarkdownRemark
                            .html
                    }
                    postSlug={data.contentfulBlogPost.postSlug}
                    location={location}
                />
                <Share
                    href={location.href}
                    title={data.contentfulBlogPost.postTitle}
                />
            </div>
            <div className='container'>
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
                        ...GatsbyContentfulFluid_withWebp
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
            postDate(formatString: "YYYY-MM-DD")
            updatedAt(formatString: "YYYY-MM-DD")
            postDescription {
                postDescription
            }
            postFeaturedImage {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            postSlug
            postTitle
        }
    }
`;
