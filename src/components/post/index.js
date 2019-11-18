import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Moment from 'react-moment';

export default props => {
    const convertDate = new Date(props.postDate).toISOString();
    console.log(props);
    return (
        <main className='post' role='main'>
            <article itemScope itemType='http://schema.org/BlogPosting'>
                <link
                    itemProp='mainEntityOfPage'
                    href={props.location.origin}
                />
                <header>
                    <h1 className='post__title' itemProp='name headline'>
                        {props.title}
                    </h1>
                    <p className='post__meta'>
                        Posted in{' '}
                        <Link
                            className='post__meta-tag'
                            to={`/${props.categorySlug}`}>
                            {props.categoryTitle}
                        </Link>{' '}
                        Posted On{' '}
                        <meta
                            itemProp='dateModified'
                            content={props.updatedAt}
                        />
                        <time
                            dateTime={props.postDate}
                            itemProp='datePublished'>
                            {props.postDate}
                        </time>{' '}
                        By{' '}
                        <span itemScope itemProp='author'>
                            {props.authorName}
                        </span>
                    </p>
                    <div
                        itemProp='image'
                        itemScope
                        itemType='http://schema.org/ImageObject'>
                        <img
                            src={props.postFeaturedImage.src}
                            className='post__image'
                            width='768'
                            itemprop='url'
                        />
                    </div>
                    <p>{props.postDescription}</p>
                </header>
                <section
                    itemProp='articleBody'
                    className='post__content'
                    dangerouslySetInnerHTML={{
                        __html: props.html
                    }}></section>
            </article>
        </main>
    );
};
