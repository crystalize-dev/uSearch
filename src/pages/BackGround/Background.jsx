import React from 'react';
import BluredRound from "../../components/UI/BluredRound/BluredRound";

const Background = () => {
    return (
        <div>
            <BluredRound top={100} left={100} size={400}/>
            <BluredRound top={1300} left={1500} size={400}/>
        </div>
    );
};

export default Background;