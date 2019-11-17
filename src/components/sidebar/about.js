import React from "react";
import Img from "gatsby-image";

export default props => {
  return (
    <section className="about">
      <Img className="about--image" fluid={props.image} alt={props.alt} />
      <div>
        <h2 className="about--title">About {props.name}</h2>
        <p
          className="about--bio"
          dangerouslySetInnerHTML={{
            __html: props.bio
          }}
        ></p>
      </div>
    </section>
  );
};
