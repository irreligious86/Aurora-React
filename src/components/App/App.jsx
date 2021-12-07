import React from "react";
import classes from './App.module.scss';
import Subheader from "../Subheader/subheader";
import Main from "../Main/main";
import Register from "../Register/register";
import Footer from "../Footer/footer";

function App() {
    return (
        <div className={classes.App}>
            <Subheader/>
            <Main/>
            <Register/>
            <Footer/>
        </div>
    );
}

export default App;
