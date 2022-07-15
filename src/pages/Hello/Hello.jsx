import React from 'react';
import cl from "./hello.module.css";
import SquareButton from "../../components/UI/Buttons/SquareButton";
import BluredRound from "../../components/UI/BluredRound/BluredRound";
import NavBar from "../../components/UI/NavBar/NavBar";
import Home from "./Home/Home";

const Hello = () => {
    return (
        <div className={cl.body}>
            <NavBar>
                <div className={cl.logo}/>
                <div>
                    <a href={"#whatMore"} className={cl.link}>What more</a>
                    <a href="#" className={cl.link}>Why us</a>
                    <a href="#" className={cl.link}>Plans</a>
                    <a href="#" className={cl.link}>Testimonials</a>
                </div>
                <SquareButton outlined={false}>Join Now</SquareButton>
            </NavBar>
            <BluredRound top={100} left={100} size={400}/>
            <Home id="home"/>
            <div id="whatMore" className={cl.whatMore}>
                <div className={cl.splitText}>
                    <h1>Explore</h1>
                    <h1>Our</h1>
                    <h1>Functionalities</h1>
                </div>
                <div className={cl.buttonsArea}>
                    <div className={cl.func}>
                        <h1>Music</h1>
                        some text
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <h1>Search</h1>
                        some text
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <h1>Chat</h1>
                        some text
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <h1>Guilds</h1>
                        some text
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;