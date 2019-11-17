import React from "react";
import GridLeft from "./grid-left";
import GridRight from "./grid-right";

export default ({ data, isTagPage }) => {
  let leftGridArray = [];
  let rightGridArray = [];

  if (isTagPage !== true) {
    data.edges.slice(1, data.edges.length).map(({ node }, index) => {
      if (index % 2 === 0) {
        leftGridArray.push(node);
      } else {
        rightGridArray.push(node);
      }
      return null;
    });
  } else {
    data.edges.map(({ node }, index) => {
      if (index % 2 === 0) {
        leftGridArray.push(node);
      } else {
        rightGridArray.push(node);
      }
      return null;
    });
  }

  return (
    <section className="grid">
      <div className="grid__left">
        {leftGridArray.map((res, index) => {
          return <GridLeft node={res} key={index} />;
        })}
      </div>
      <div className="grid__right">
        {rightGridArray.map((res, index) => {
          return <GridRight node={res} key={index} />;
        })}
      </div>
    </section>
  );
};
