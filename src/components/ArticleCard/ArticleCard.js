import React from "react";
import classes from './ArticleCard.module.css';

const ArticleCard = ({title, content, img: image}) => {
    return (
            <div className={classes.article}>
                <img  src={image} alt="" />
                <div className={classes.text}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.body}>{content}</p>
                </div>
            </div>
    );
};

export default ArticleCard;
