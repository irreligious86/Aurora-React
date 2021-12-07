import React from 'react';
import classes from './header.module.scss';

function Header(props) {
    return (
        <div className={classes.header}>
            <div className="main-header-label">
                <h2 className="main-header-label__text">Aurora</h2>
            </div>
            <div className="main-header-interaction">

            </div>
            <div className="main-header-sign">Sign In</div>
        </div>
    );
}

export default Header;