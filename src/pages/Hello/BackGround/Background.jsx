import React from 'react';
import BluredRound from "../../../components/UI/BluredRound/BluredRound";

const Background = () => {
    return (
        <div>
            <BluredRound top={100} left={100} size={400}/>
            <BluredRound top={1300} left={1500} size={400}/>
            <BluredRound top={2100} left={-600} size={400}/>
            <BluredRound top={3000} left={800} size={200}/>
            <BluredRound top={3900} left={2000} size={500}/>
            <BluredRound top={5300} left={500} size={1000}/>
        </div>
    );
};

export default Background;