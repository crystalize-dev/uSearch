import React from 'react';
import cl from "../page_styles/hello_page.module.css";
import Slider from "../components/UI/Slider/Slider";
import Credits from "../components/UI/inline-elems/Credits/Credits";
import classes from "classnames";

const Hello = () => {
    return (
        <div className={cl.hello__wrapper}>
            <div className={cl.post}>
                <div className={classes(cl.background__img, cl.img4)}/>
                <div className={classes(cl.post, cl.centered, cl.absolute)}>
                    <div className={cl.post__text}>
                        <h1>Greetings!</h1>
                        <hr/>
                        <p>
                            Integer et. Accumsan risus in in lectus nisi mollis lacinia id molestie imperdiet dolor
                            augue
                            tempus faucibus. Urna tempus malesuada sed vitae sapien ultricies. Et libero, lorem sed ex.
                            Velit augue ornare ut. Pulvinar odio. Sit amet, id lectus amet, accumsan faucibus. Mattis
                            eget
                            nunc risus dui amet, mattis quam, id id est. Adipiscing in et tortor, et. Faucibus. Augue
                            pulvinar dui non morbi efficitur urna cras quis, tempus cursus tortor, est. Nisi in mattis
                            consectetur ut. Cras ultricies. Quam, consectetur nunc venenatis dapibus mollis vestibulum
                            et.
                            Et vel amet, id integer vel morbi pulvinar integer vestibulum lectus non venenatis quam, hac
                            luctus eleifend elit. Mattis orci, elit. Hac luctus dictum. Amet, quam, consectetur mattis
                            interdum dui libero, integer sed sit ultricies. Integer vestibulum ultricies. Sit hac sit
                            nulla
                            ornare nunc dictum. Adipiscing in vitae nisi morbi sit justo cursus accumsan arcu nec platea
                            velit urna platea molestie molestie ornar.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes(cl.post, cl.spaced)}>
                <div className={classes(cl.post__text, cl.text__area)}>
                    <p>Imperdiet quam, amet imperdiet arcu malesuada urna mattis dictumst. Habitasse sit lectus
                        pellentesque non in molestie nunc dictum morbi interdum sed tortor, non vel sit risus venenatis
                        amet, elit. Efficitur et dolor malesuada id sit ex. Et et consectetur urna orci, eget dolor
                        mattis in vestibulum non vitae in in eget mollis tortor, luctus amet, imperdiet vestibulum
                        sapien vulputate urna interdum eget mollis velit arcu amet, in dui dictum. Quam, in dictumst.
                        Ultricies. Nulla in risus ornare quam, ipsum dictum. Dui lacinia amet, ultricies. In sed ipsum
                        </p>
                </div>
                <div className={classes(cl.img__area, cl.img1)}/>
            </div>
            <hr className={cl.line}/>
            <div className={classes(cl.post, cl.spaced)}>
                <div className={classes(cl.img__area, cl.img2)}/>
                <div className={classes(cl.post__text, cl.text__area)}>
                    <p>Aenean eget hac accumsan sit justo dictum tempus augue mollis est. In lacinia ultricies. Odio.
                        Molestie tortor, urna hac lorem amet, mauris dui lectus cursus dictum. Mattis cras in velit
                        dapibus ut. Lacinia consectetur amet arcu platea amet, nulla elit. Interdum sed non non cursus
                        est. In vulputate aenean faucibus. Mollis dictum sed molestie nulla ipsum arcu et. Dictum. Risus
                        dictumst. Hac et in sapien malesuada in faucibus. Velit vel faucibus. Nec dictumst. Id dictumst.
                        Eget platea habitasse justo aenean ultricies. Efficitur ultricies. Amet risus amet in vel
                        adipiscing imperdiet malesuada ornare quam, interdum odio. Habitasse velit in risus nec
                        </p>
                </div>
            </div>
            <hr className={cl.line}/>
            <Slider width={90} className={classes(cl.post, cl.centered)}>
                <div className={classes(cl.item, cl.img1)}/>
                <div className={classes(cl.item, cl.img5)}/>
                <div className={classes(cl.item, cl.img3)}/>
            </Slider>
            <Credits/>
        </div>
    );
};

export default Hello;