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
        title={`About - ${config.siteTitle}`}
        pathname={location.pathname}
        description={`Furry Canines Team offers practical, real-life tips and training
      advice to help you properly care for your dog.`}
      />
      <Header />
      <main className="page" role="main" itemScope itemProp="mainContentOfPage">
        <header>
          <h1 className="page__title">About The Furry Canine Team</h1>
        </header>
        <section className="page__content">
          <h2>Who We Are</h2>

          <p>
            Furry Canines Team offers practical, real-life tips and training
            advice to help you properly care for your dog.
          </p>

          <p>
            Our articles are based on our long experience as dog owners and
            years of apprenticeship and collaboration with professional dog
            trainers. We write out of passion for dogs and as with most bloggers
            out there it all started with a dog.
          </p>

          <p>
            Our dog is a German Shepherd + Belgian Malinois mix and one would
            think such a puppy is confident as hell. Well not Thor.{" "}
          </p>

          <p>
            He came with major confidence and insecurity issues, developing in
            the teen months another major issue - dog reactivity. What we
            learned after 6 dog trainers and numerous books?{" "}
          </p>

          <p>
            There is no magic potion and you can not clap your heels to make bad
            behaviour go away.{" "}
          </p>

          <p>
            You bring patience, assertiveness, structure, leave out the anger,
            yelling and frustration and then the magic happens. Today we are
            thankful that we took Thor in and that, thanks to him, we became
            better persons and with a pretty extensive dog knowledge.{" "}
          </p>

          <p>
            NO, we do not know everything and we keep learning and hopefully
            will do forever.
          </p>
          <h2>Meet The Team</h2>
          <strong>Alexandra & Pascal</strong>
          <p>
            Our writers, trainers, photographers, testers, web designers and
            programmers.
          </p>
          <strong>Thor</strong>
          <p>
            Our bundle of joy, our source of inspiration, our tester and our
            teacher. We would love to help you One of our favourite way to repay
            the community is to answer your questions and help you out in any
            way we can with your dog. If you have any specific questions about
            your dog feel free to email them to us. We will be glad to answer
            them, and they might even make it onto the blog.
          </p>
          <h2>Keep In Touch & Follow Along</h2>
          <p>
            Follow us on Facebook, Instagram, Pinterest and join our newsletter
            for the monthly knowledge pill.
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
