import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Moment from "react-moment";
import { MdFolder, MdEventNote } from "react-icons/md";
import { IconContext } from "react-icons";

export default ({ data }, props) => {
  const { node } = data;

  return (
    <section className="card">
      <Link to={`/${node.postSlug}`} aria-label={node.postTitle}>
        <Img className="card__image" fluid={node.postFeaturedImage.fluid} />
      </Link>
      <div className="card__content">
        <h2 className="card__content--title">
          <Link to={`/${node.postSlug}`} aria-label={node.postTitle}>
            {node.postTitle}
          </Link>
        </h2>
        <p className="card__content--description">
          {node.postDescription.postDescription}
        </p>
        <p className="card__content--meta">
          <Link
            to={`/${node.postCategory.categorySlug}`}
            aria-label={node.postCategory.postCategory}
          >
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
    </section>
  );
};
