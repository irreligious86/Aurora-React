import React from 'react';
import classes from './main.module.scss';
import Content from "../Content/content";
import Header from "../Header/header";

function Main(props) {
    return (
        <div className={classes.main}>
            <Header/>
            <Content/>
        </div>
    );
}

export default Main;