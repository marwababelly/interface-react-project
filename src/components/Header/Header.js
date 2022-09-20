import { React,Fragment } from "react";
import classes from './Header.module.css';
// import pic from '/imges/img-1.jpg';


const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <img  src='./imges/img-1.jpg' alt="" />
                <h1>Welcome To React ...</h1>
            </div>
        </Fragment>
    );
};

export default Header;