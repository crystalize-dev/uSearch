import React, {Children, cloneElement, useEffect, useState} from 'react';
import cl from "./Slider.module.css";
import classes from "classnames";

const Slider = ({width, children, ...props}) => {
    const PAGE_WIDTH = width
    const [pages, setPages] = useState([])
    const [offSet, setOffSet] = useState(0)

    const handleLeftArrowClick = () => {
        const minOffset = 0
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

        setOffSet((currentOffset) => {
            return (currentOffset + PAGE_WIDTH) > minOffset ? maxOffset : (currentOffset + PAGE_WIDTH);
        })
    }

    const handleRightArrowClick = () => {
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

        setOffSet((currentOffset) => {
            return (currentOffset - PAGE_WIDTH) < maxOffset ? 0 : (currentOffset - PAGE_WIDTH);
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        maxWidth: `${PAGE_WIDTH}vw`,
                        minWidth: `${PAGE_WIDTH}vw`,
                    },
                })
            })
        )
    }, [])

    return (
        <div className={props.className}>
            <div className={cl.main_container}>
                <div className={classes(cl.arrow, cl.left)} onClick={handleLeftArrowClick}/>
                <div className={cl.window}>
                    <div className={cl.all_items_container}
                         style={{
                             transform: `translateX(${offSet}vw)`
                         }}
                    >
                        {pages}
                    </div>
                </div>
                <div className={classes(cl.arrow, cl.right)} onClick={handleRightArrowClick}/>
            </div>
        </div>
    );
};

export default Slider;