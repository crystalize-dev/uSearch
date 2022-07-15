import React, {Children, cloneElement, useEffect, useState} from 'react';
import cl from "./Slider.module.css";
import classes from "classnames";

const Slider = ({width, children, ...props}) => {
    const PAGE_WIDTH = width
    const [pages, setPages] = useState([])
    const [offSet, setOffSet] = useState(0)
    const [leftVisible, setLeftVisible] = useState(false)
    const [rightVisible, setRightVisible] = useState(true)

    const handleLeftArrowClick = () => {
        const minOffset = 0

        setOffSet((currentOffset) => {
            return (currentOffset + PAGE_WIDTH) > minOffset ? setLeftVisible(false) : (currentOffset + PAGE_WIDTH);
        })
    }

    const handleRightArrowClick = () => {
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

        setOffSet((currentOffset) => {
            return (currentOffset - PAGE_WIDTH) < maxOffset ? setRightVisible(false) : (currentOffset - PAGE_WIDTH);
        })
    }

    useEffect(() => {
        const minOffset = 0
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

        offSet === minOffset ? setLeftVisible(false) : setLeftVisible(true);
        offSet === maxOffset ? setRightVisible(false) : setRightVisible(true);
    }, [offSet])

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
                <div className={leftVisible ? classes(cl.arrow, cl.left) : classes(cl.arrow, cl.left, cl.invisible)} onClick={handleLeftArrowClick}/>
                <div className={cl.window}>
                    <div className={cl.all_items_container}
                         style={{
                             transform: `translateX(${offSet}vw)`
                         }}
                    >
                        {pages}
                    </div>
                </div>
                <div className={rightVisible ? classes(cl.arrow, cl.right) : classes(cl.arrow, cl.right, cl.invisible)} onClick={handleRightArrowClick}/>
            </div>
        </div>
    );
};

export default Slider;