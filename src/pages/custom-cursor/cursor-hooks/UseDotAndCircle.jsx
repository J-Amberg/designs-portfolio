import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function UseDotAndCircle(duration = 1000, cursorStyle = 0) {
    /* CURSOR STYLE 1 */
    useEffect(() => {

        //select cursor elements
        const cursorDot = document.querySelector("[data-cursor-dot-1]");
        const cursorOutline = document.querySelector("[data-cursor-outline-1]");

        const handleMouseMove = (e) => {
            if (cursorStyle !== 0)
                return;

            //get coordinates of cursor
            const posX = e.clientX;
            const posY = e.clientY;

            //style cursor elements
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            //animate cursor
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: duration })
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [duration, cursorStyle]);

}

UseDotAndCircle.propTypes = {
    duration: PropTypes.number,
    cursorStyle: PropTypes.number
}

