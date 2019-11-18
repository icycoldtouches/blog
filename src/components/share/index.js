import React from 'react';

import {
    IoLogoFacebook,
    IoLogoLinkedin,
    IoIosMail,
    IoLogoReddit,
    IoLogoTumblr,
    IoLogoTwitter
} from 'react-icons/io';
import { IconContext } from 'react-icons';

export default props => {
    return (
        <section className='share'>
            <div className='top'>
                <h2>Share This With Your Friends On:</h2>
            </div>
            <div className='bottom'>
                <a
                    href={`mailto:?subject=${props.title}&body=Hey I saw this article and I thought it might be interesting for you ${props.href}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoIosMail />
                    </IconContext.Provider>
                </a>
                <a
                    href={`http://www.facebook.com/sharer.php?u=${props.href}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoLogoFacebook />
                    </IconContext.Provider>
                </a>
                <a
                    href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${props.href}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoLogoLinkedin />
                    </IconContext.Provider>
                </a>
                <a
                    href={`http://reddit.com/submit?url=${props.href}&title=${props.title}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoLogoReddit />
                    </IconContext.Provider>
                </a>
                <a
                    href={`http://www.tumblr.com/share/link?url=${props.href}&title=${props.title}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoLogoTumblr />
                    </IconContext.Provider>
                </a>
                <a
                    href={`http://twitter.com/intent/tweet?text=${props.title}&url=${props.href}&hashtags=#furrycanines`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <IoLogoTwitter />
                    </IconContext.Provider>
                </a>
            </div>
        </section>
    );
};
