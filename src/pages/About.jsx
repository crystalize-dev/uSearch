import React from 'react';
import "../page_styles/app.css";
import cl from "../page_styles/about.module.css";
import {Link} from "react-router-dom";
import Credits from "../components/UI/inline-elems/Credits/Credits";

const About = () => {
    return (
        <div className={cl.about__wrapper}>
            <div className={cl.back__button}>
                <Link to="/" className={cl.back__img}/>
            </div>
            <div className={cl.textBox}>
                <h1>About us</h1>
                <hr/>
                <p>
                    Sodales pellentesque in adipiscing aenean in in non quis, augue sodales dui molestie ornare accumsan
                    pellentesque sit dui et habitasse et. Dictumst. Venenatis justo non lacinia eget consectetur
                    dictumst.
                    Velit dapibus vitae mauris mattis non non justo nec libero, ornare sapien vel nunc et mollis hac non
                    tempus mattis dolor platea sit molestie dictumst. Leo, amet efficitur in ut. Faucibus. Arcu
                    faucibus.
                    Mauris ut. Non dapibus imperdiet platea vel pellentesque non orci, et vel adipiscing vitae ut.
                    Libero,
                    venenatis tortor, dapibus dictum. Habitasse dolor consectetur accumsan et quis, dui ipsum ornare
                    odio.
                    Sapien mauris platea dui elit. Sit in tempus augue non amet velit ornare dapibus amet sapien
                    eleifend
                    non et. In imperdiet tortor, non lacinia mattis lectus consectetur quis, ut. Consectetur justo hac
                    mattis adipiscing morbi consectetur urna mauris imperdiet dolor lacinia cras dolor odio. Vitae cras
                    faucibus. Imperdiet sed nisi non vitae amet, in non sed justo sapien mauris urna velit pulvinar
                    vestibulum leo, habitasse efficitur imperdiet habitasse mauris mollis mattis in id dictum nulla
                    eleifend
                    nulla in in mattis dictumst. Accumsan odio. Non vulputate ipsum lacinia vestibulum et. Quam, dui
                    vitae
                    arcu in nec et habitasse risus ultricies. Sit ut. Ornare urna lacinia luctus non efficitur in eget
                    cras
                    vestibulum molestie sed in et. Eget mollis et. Urna platea in sit pulvinar ultricies. Morbi lacinia
                    adipiscing sed vel in hac adipiscing interdum nisi platea lorem pellentesque dui dictumst. Urna sed
                    consectetur sed vestibulum sed venenatis mollis pulvinar justo elit. Quam, velit habitasse dolor
                    lorem
                    risus dolor quis.
                </p>
                <hr/>
                <h1 className={cl.block}>What's more ?</h1>
                <hr/>
                <p>Ornare pulvinar sapien hac molestie quis, luctus imperdiet ipsum interdum nulla
                    ornare eget tortor,
                    libero, hac elit. Id pulvinar nulla cras sit tortor, velit efficitur amet sed lacinia mattis lacinia
                    imperdiet augue malesuada lorem risus in in odio. Imperdiet et nisi consectetur leo, in orci,
                    eleifend
                    leo, mauris sed ipsum interdum ultricies. Dui orci, morbi non amet ornare velit vulputate lorem
                    adipiscing sit luctus odio. Adipiscing in orci, dolor consectetur lectus in ornare et lacinia in
                    mollis
                    libero, nec tortor, pulvinar lorem sapien ut. Molestie et tempus lacinia ultricies. Lacinia
                    malesuada
                    consectetur amet mattis sed ex. Pulvinar faucibus. Adipiscing amet amet leo, tortor, dolor risus
                    amet
                    morbi libero, orci, sit luctus ipsum vitae vel consectetur et risus sit id et ultricies. Tortor,
                    eleifend molestie malesuada hac orci, eget leo, sapien odio. Vestibulum sit et sit venenatis ipsum
                    nulla
                    ut. Et justo sed orci, velit nulla pellentesque risus elit. Vel dictum molestie in quis, nunc
                    dapibus
                    dolor mauris integer efficitur sit nisi sed dolor eleifend vel orci, nec ornare amet, sit mauris
                    consectetur mattis ornare non justo molestie sed nec sapien molestie vestibulum consectetur ut.
                    Adipiscing ultricies. Nunc velit arcu arcu nulla est. Amet, vitae non accumsan et sit amet molestie
                    elit. Amet dictum eget integer sit tortor, vitae dictum. Molestie risus hac malesuada faucibus. Sit
                    interdum amet, faucibus. Morbi orci, tempus nulla mattis justo vel arcu risus justo sed quam, morbi
                    eleifend integer tortor, molestie sit ornare lorem tempus ut. Ex. Libero, vitae id id in lorem dolor
                    nec
                    dolo.</p>
                <Credits/>
            </div>
        </div>
    )
};

export default About;