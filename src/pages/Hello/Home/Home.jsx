import React from 'react';
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import cl from "./Home.module.css";
import OutLined from "../../../components/UI/OutLinedText/OutLined";
import {antiMage} from "../../../img/imgs";
import BluredRound from "../BluredRound/BluredRound";

const Home = ({id, setVisible}) => {
    return (
        <div id={id} className={cl.home}>
            <BluredRound size={500} top={4} left={-10}/>
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
                <div className={cl.btns}>
                    <SquareButton outlined={false} className={cl.backgrounded} onClick={() => setVisible(true)}>Get started</SquareButton>
                    <SquareButton outlined={true} className={cl.outlined}><a href="#whatMore">Learn More</a></SquareButton>
                </div>
            </div>
            <img className={cl.imgArea} src={antiMage} alt=""/>
            <div className={cl.rectangle}/>
        </div>
    );
};

export default Home;