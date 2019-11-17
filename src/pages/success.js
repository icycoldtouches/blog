import React from "react";
import { Link } from "gatsby";
import config from "../../config";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/header";
import SubscirbeFrom from "../components/subscribe";
import Footer from "../components/footer";

export default ({ location }) => {
  return (
    <Layout>
      <SEO
        title={`Success - ${config.siteTitle}`}
        pathname={location.pathname}
        description={`Success Page`}
      />
      <Header />
      <main className="page" role="main" itemScope itemProp="mainContentOfPage">
        <header>
          <h1 className="page__title">
            You Successfully Subscribed To Our Mailing List.
          </h1>
        </header>
        <section className="page__content" style={{ textAlign: "center" }}>
          Return back to our <Link to="/">Home Page</Link> or{" "}
          <a
            href="https://furrycanines.us20.list-manage.com/unsubscribe?u=b5d46c8850b011c0b76212b85&id=3161f7ec1d"
            aria-label="unsubscribe"
            tager="_blank"
            rel="noopener noreferrer nofollow"
          >
            Unsubscribe
          </a>{" "}
          from our mailing list if this was an accident.
        </section>
      </main>
      <div className="container">
        <SubscirbeFrom />
        <Footer />
      </div>
    </Layout>
  );
};
