import React from "react";
import { Link } from "gatsby";

export default () => (
  <section className="page-not-found">
    <h1>Whoops.... The page you are looking for doesn't exist.</h1>
    <p>
      Please return to our <Link to="/">home page</Link> or have a look at our
      most recents posts if what you are looking for is there.
    </p>
  </section>
);
