import React from 'react';
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import cl from "./Home.module.css";

const Home = (id) => {
    return (
        <div id={id} className={cl.home}>
            <div className={cl.textArea}>
                <h1><span className={cl.colored}>Search</span> your ideal teammate</h1>
                <p>we will help you find the most ideal teammate, that fits to you! Just click a few button and you
                    free to go</p>
                <div className={cl.statistic}>
                    <div className={cl.statisticItem}>
                        <h2>50+</h2>
                        various games
                    </div>
                    <div className={cl.statisticItem}>
                        <h2>1k+</h2>
                        members joined
                    </div>
                    <div className={cl.statisticItem}>
                        <h2>1s</h2>
                        to find teammate
                    </div>
                </div>
                <div className={cl.homeBtns}>
                    <SquareButton outlined={false} className={cl.backgrounded}>Get started</SquareButton>
                    <SquareButton outlined={true}>Learn More</SquareButton>
                </div>
            </div>
            <div className={cl.imgArea}/>
            <div className={cl.rectangle}/>
        </div>
    );
};

export default Home;