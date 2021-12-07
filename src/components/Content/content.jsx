import React from 'react';
import classes from "./content.module.scss";

function Content(props) {
    return (
        <div className={classes.content}>
            <h1 className={classes['content__title']}>
                Hello! Welcome to Aurora
            </h1>
        </div>
    );
}

export default Content;