import React from 'react';
import cl from "./splitText.module.css";

const SplitText = ({outlined1, outlined2, children, id}) => {
    return (
        <div id={id} className={cl.splitText}>
            <h1 className={cl.outlined}>{outlined1}</h1>
            <h1>{children}</h1>
            <h1 className={cl.outlined}>{outlined2}</h1>
        </div>
    );
};

export default SplitText;