import React from "react";
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
        title={`Affiliate Disclosure - ${config.siteTitle}`}
        pathname={location.pathname}
        description={`Furry Canines is also a
        participant in the Amazon Services LLC Associates Program, an
        affiliate advertising program designed to provide a means for sites
        to earn advertising fees by advertising and linking to Amazon.com.`}
      />
      <Header />
      <main className="page" role="main" itemScope itemProp="mainContentOfPage">
        <header>
          <h1 className="page__title">Affiliate Disclosure</h1>
        </header>
        <section className="page__content">
          <p>
            <a href="https://Furrycanines.com">Furrycanines.com</a> is also a
            participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites
            to earn advertising fees by advertising and linking to Amazon.com.
            Pages on this site may include affiliate links to Amazon and its
            affiliate sites on which the owner of this website will make a
            referral commission.
          </p>
        </section>
      </main>
      <div className="container">
        <SubscirbeFrom />
        <Footer />
      </div>
    </Layout>
  );
};
