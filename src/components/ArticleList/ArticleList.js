import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import classes from './ArtileList.module.css';

const data = [
        {
            id: 1,
            title: "First Article",
            img: './imges/img-1.jpg',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
        },
        {
            id: 2,
            title: "Article Title 2",
            img: './imges/img-2.jpg',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
        },
        {
            id: 3,
            title: "Article Title 3",
            img: './imges/img-4.jpg',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
        },
    ];

const ArticleList = () => {

    return (
            <div className={classes.articleList}>
                {data.map((item) => (
                    <ArticleCard
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        content={item.content}
                    />
                ))}
            </div>
    );
};

export default ArticleList;