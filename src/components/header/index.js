import React, { useState } from "react";
import { Link } from "gatsby";

export default props => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={!navOpen ? `header` : `header header-fixed-top`}
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className="brand">
        <p className="brand__text" itemProp="name">
          <Link to="/">
            {props.siteTitle && props.siteTitle
              ? props.siteTitle
              : `Furry Canines`}
          </Link>
        </p>
      </div>
      <div
        className={!navOpen ? `toggle` : `toggle toggle--open`}
        role="button"
        aria-label="Menu Toggle"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={!navOpen ? `navbar` : `navbar navbar--open`}
        tabIndex={0}
        role="navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <Link
          itemProp="url"
          to="/dog-breeds"
          aria-label="Dog Breeds"
          activeClassName="navbar__link--active"
          className="navbar__link"
          tabIndex={0}
          partiallyActive={true}
        >
          <span itemProp="name"> Dog Breeds </span>
        </Link>
        <Link
          itemProp="url"
          to="/dog-care"
          aria-label="Dog Care"
          activeClassName="navbar__link--active"
          className="navbar__link"
          tabIndex={0}
          partiallyActive={true}
        >
          <span itemProp="name"> Dog Care </span>
        </Link>
        <Link
          itemProp="url"
          to="/dog-health"
          aria-label="Dog Health"
          activeClassName="navbar__link--active"
          className="navbar__link"
          tabIndex={0}
          partiallyActive={true}
        >
          <span itemProp="name"> Dog Health </span>
        </Link>
        <Link
          itemProp="url"
          to="/dog-training"
          aria-label="Dog Training"
          activeClassName="navbar__link--active"
          className="navbar__link"
          tabIndex={0}
          partiallyActive={true}
        >
          <span itemProp="name"> Dog Training </span>
        </Link>
        <Link
          itemProp="url"
          to="/dog-supplies"
          aria-label="Dog Supplies"
          activeClassName="navbar__link--active"
          className="navbar__link"
          tabIndex={0}
          partiallyActive={true}
        >
          <span itemProp="name"> Dog Supplies </span>
        </Link>
      </nav>
    </header>
  );
};
