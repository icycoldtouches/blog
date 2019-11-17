import React from "react";
import { Link } from "gatsby";

export default ({ pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <section className="pagination">
      {!isFirst && (
        <Link
          to={`/${pageContext.slug}/${prevPage}`}
          rel="prev"
          className="pagination__prev"
          aria-label={`Previous ${pageContext.tag} page`}
        >
          ← Previous Page
        </Link>
      )}
      {numPages <= 1 ? (
        ``
      ) : (
        <div>
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/${pageContext.slug}/${i === 0 ? "" : i + 1}`}
              className="pagination__numbers"
              aria-label={`${pageContext.tag} page number ${i} from ${numPages}`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      )}
      {!isLast && (
        <Link
          to={`/${pageContext.slug}/${nextPage}`}
          rel="next"
          className="pagination__next"
          aria-label={`Next ${pageContext.tag} page`}
        >
          Next Page →
        </Link>
      )}
    </section>
  );
};
