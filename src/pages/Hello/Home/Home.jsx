import React from 'react';
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import cl from "./Home.module.css";
import OutLined from "../../../components/UI/OutLinedText/OutLined";
import {antiMage} from "../../../img/imgs";

const Home = ({id}) => {
    return (
        <div id={id} className={cl.home}>
            <div className={cl.textArea}>
                <h1><OutLined>SEARCH</OutLined> YOUR IDEAL TEAMMATE</h1>
                <p>We will help you find the perfect match for you. Just click a couple of buttons and go!</p>
                <div className={cl.statistic}>
                    <div className={cl.statisticItem}>
                        <h2>50+</h2>
                        various games
                    </div>
                    <div className={cl.statisticItem}>
                        <h2>100k+</h2>
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
            <div className={cl.imgArea}>
                <img src={antiMage} alt=""/>
            </div>
            <div className={cl.rectangle}/>
        </div>
    );
};

export default Home;