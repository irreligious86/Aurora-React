import React from 'react';
import classes from './footer.module.scss';
import {ReactComponent as Insta} from "../../assets/logo/insta.svg";
import {ReactComponent as Twitter} from "../../assets/logo/twitter.svg";
import {ReactComponent as Snapchat} from "../../assets/logo/snapchat.svg";
import {ReactComponent as Facebook} from "../../assets/logo/facebook.svg";
import {ReactComponent as Youtube} from "../../assets/logo/youtube.svg";

function Footer(props) {
    return (
        <div className={classes.footer}>
            <div className={classes['footer-inner']}>
                <div className={classes['footer-section']}>
                    <header className={classes['footer-section__title']}>
                        About Us
                    </header>
                    <ul className={classes['footer-section-list']}>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Who we are</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Our stores</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Customer Reviews</a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer-section']}>
                    <header className={classes['footer-section__title']}>
                        Categories
                    </header>
                    <ul className={classes['footer-section-list']}>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Women fashion</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Accessories</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Kids</a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer-section']}>
                    <header className={classes['footer-section__title']}>
                        Help
                    </header>
                    <ul className={classes['footer-section-list']}>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Customer service</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Size guide</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer-section']}>
                    <header className={classes['footer-section__title']}>
                        Payments & Delivery
                    </header>
                    <ul className={classes['footer-section-list']}>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Purchase terms</a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="#">Guarantee</a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer-section']}>
                    <header className={classes['footer-section__title']}>
                        Social
                    </header>
                    <ul className={`${classes['footer-section-list']} ${classes['social-icon-list']}`}>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="">
                                <Insta/>
                            </a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="">
                                <Twitter/>
                            </a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="">
                                <Snapchat/>
                            </a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="">
                                <Facebook/>
                            </a>
                        </li>
                        <li className={classes['footer-section__item']}>
                            <a className={classes['footer-section__link']}
                               href="">
                                <Youtube/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={classes['footer__copyright']}>
                © Copyright, Aurora 2020. All Rights reserved.
            </p>
        </div>
    );
}

export default Footer;