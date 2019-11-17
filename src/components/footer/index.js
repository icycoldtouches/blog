import React from 'react';
import { Link } from 'gatsby';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default () => {
    const data = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top--left'>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/affiliate-disclosure'>
                                Affiliate Disclosure
                            </Link>
                        </li>
                        <li>
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                        </li>
                        <li>
                            <a
                                href='https://furrycanines.us20.list-manage.com/unsubscribe?u=b5d46c8850b011c0b76212b85&id=3161f7ec1d'
                                aria-label='unsubscribe'
                                tager='_blank'
                                rel='noopener noreferrer nofollow'>
                                Unsubscribe
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__top--right'>
                    <ul>
                        <li>
                            <a
                                href='https://facebook.com/thefurrycaninesblog'
                                target='_blank'
                                rel='noopener noreferrer nofollow'
                                aria-label='Facebook'>
                                <IconContext.Provider
                                    value={{ className: 'icon' }}>
                                    <IoLogoFacebook />
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://instagram.com/furrycanines'
                                target='_blank'
                                rel='noopener noreferrer nofollow'
                                aria-label='instagram'>
                                <IconContext.Provider
                                    value={{ className: 'icon' }}>
                                    <IoLogoInstagram />
                                </IconContext.Provider>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>&copy; {data} Furry Canines | All Rights Reserved.</p>
            </div>
        </footer>
    );
};
