import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function UseFiveYellowCircles(duration = 100, cursorStyle = 0) {
    /* CURSOR STYLE 2 */
    useEffect(() => {

        //get cursor elements
        const cursorDotOne = document.querySelector("[data-cursor-dot-2-0]");
        const cursorDotTwo = document.querySelector("[data-cursor-dot-2-1]");
        const cursorDotThree = document.querySelector("[data-cursor-dot-2-2]");
        const cursorDotFour = document.querySelector("[data-cursor-dot-2-3]");
        const cursorDotFive = document.querySelector("[data-cursor-dot-2-4]");

        const handleMouseMove = (e) => {
            if (cursorStyle !== 1)
                return;

            //coordinates of cursor
            const posX = e.clientX;
            const posY = e.clientY;

            //style cursor parts
            cursorDotOne.style.left = `${posX}px`;
            cursorDotOne.style.top = `${posY}px`;

            cursorDotTwo.style.left = `${posX}px`;
            cursorDotTwo.style.top = `${posY}px`;

            cursorDotThree.style.left = `${posX}px`;
            cursorDotThree.style.top = `${posY}px`;

            cursorDotFour.style.left = `${posX}px`;
            cursorDotFour.style.top = `${posY}px`;

            cursorDotFive.style.left = `${posX}px`;
            cursorDotFive.style.top = `${posY}px`;

            //animate cursor parts
            cursorDotTwo.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: duration })

            cursorDotThree.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: duration * 2 })

            cursorDotFour.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: duration * 3 })

            cursorDotFive.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: duration * 4 })
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [duration, cursorStyle]);
}

UseFiveYellowCircles.propTypes = {
    duration: PropTypes.number,
    cursorStyle: PropTypes.number
}