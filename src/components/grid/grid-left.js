import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Moment from "react-moment";
import { MdFolder, MdEventNote } from "react-icons/md";
import { IconContext } from "react-icons";

export default ({ node }) => {
  return (
    <section className="card card__grid">
      <Link to={`/${node.postSlug}`} aria-label={node.postTitle}>
        <Img
          fluid={node.postFeaturedImage.fluid}
          className="card__image card__image--grid"
        />
      </Link>
      <div className="card__content">
        <h2 className="card__content--title">
          <Link to={`/${node.postSlug}`}>{node.postTitle}</Link>
        </h2>
        <div>
          <p className="card__content--description">
            {node.postDescription.postDescription}
          </p>
          <p className="card__content--meta">
            <Link to={`/${node.postCategory.categorySlug}`}>
              <span>
                <IconContext.Provider value={{ className: "icon" }}>
                  <MdFolder />
                </IconContext.Provider>
                {node.postCategory.categoryTitle}
              </span>
            </Link>{" "}
            <IconContext.Provider value={{ className: "icon" }}>
              <MdEventNote />
            </IconContext.Provider>
            <Moment format="MMMM Do, YYYY" date={node.postDate}>
              {node.postDate}
            </Moment>
          </p>
        </div>
      </div>
    </section>
  );
};
