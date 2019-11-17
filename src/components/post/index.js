import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Moment from "react-moment";

export default props => (
  <main className="post" role="main" itemScope itemProp="mainContentOfPage">
    <article itemScope itemType="http://schema.org/Article">
      <header>
        <h1 className="post__title" itemProp="name headline">
          {props.title}
        </h1>
        <p className="post__meta">
          Posted in{" "}
          <Link className="post__meta-tag" to={`/${props.categorySlug}`}>
            {props.categoryTitle}
          </Link>{" "}
          Posted On{" "}
          <Moment
            format="MMMM Do, YYYY"
            date={props.postDate}
            itemProp="datePublished"
          >
            {props.postDate}
          </Moment>{" "}
          By{" "}
          <span
            itemScope
            itemProp="author"
            itemptype="http://schema.org/Person"
          >
            {props.authorName}
          </span>
        </p>
        <Img className="post__image" fluid={props.postFeaturedImage} />
        <p>{props.postDescription}</p>
      </header>
      <section
        itemProp="articleBody"
        className="post__content"
        dangerouslySetInnerHTML={{
          __html: props.html
        }}
      ></section>
    </article>
  </main>
);
