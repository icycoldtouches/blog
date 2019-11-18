import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../../images/favicon.png';

export default props => {
    const convertDate = new Date(props.postDate).toISOString();
    return (
        <main className='post' role='main'>
            <article
                itemScope
                itemType='https://schema.org/BlogPosting'
                itemID={`#${props.postSlug}`}>
                <link itemProp='mainEntityOfPage' href={props.location.href} />
                <div
                    itemProp='publisher'
                    itemScope
                    itemType='https://schema.org/Organization'>
                    <div
                        itemProp='logo'
                        itemScope
                        itemType='https://schema.org/ImageObject'>
                        <meta itemProp='url' content={Logo} />
                        <meta itemProp='width' content='60' />
                        <meta itemProp='height' content='60' />
                    </div>
                    <meta itemProp='name' content='Furry Canines'></meta>
                </div>
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
                        <span
                            itemProp='author'
                            itemScope
                            itemType='https://schema.org/Person'>
                            >
                            <meta itemProp='name' content={props.authorName} />
                            {props.authorName}
                        </span>
                    </p>
                    <div
                        itemProp='image'
                        itemScope
                        itemType='https://schema.org/ImageObject'>
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
