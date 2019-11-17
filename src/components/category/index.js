import React from "react";

export default props => (
  <section className="category">
    <h1 className="category__title">{props.tag}</h1>
    <p className="category__description">{props.categoryDescription}</p>
  </section>
);
