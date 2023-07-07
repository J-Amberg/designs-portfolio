import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function UseFiveYellowCircles(duration = 100, cursorStyle = 0) {

    const rotateRef = useRef(0);

    /* CURSOR STYLE 2 */
    useEffect(() => {

        //get cursor elements
        const cursorSquare = document.querySelector("[data-cursor-outline-3]");
        const cursorSquareTwo = document.querySelector("[data-cursor-dot-3]");

        const handleMouseMove = (e) => {
            if (cursorStyle !== 2)
                return;

            //coordinates of cursor
            const posX = e.clientX;
            const posY = e.clientY;

            //style cursor parts
            cursorSquare.style.left = `${posX - 15}px`;
            cursorSquare.style.top = `${posY - 15}px`;

            cursorSquare.style.transform = `rotate(${rotateRef.current*8}deg)`;
            cursorSquare.style.transformOrigin = 'center';

            cursorSquareTwo.style.left = `${posX}px`;
            cursorSquareTwo.style.top = `${posY}px`;

            cursorSquareTwo.style.transformOrigin = 'center';

            //animate cursor parts
            cursorSquare.animate({
                left: `${posX - 15}px`,
                top: `${posY - 15}px`,
            }, { duration: duration })

            if(rotateRef.current === 180)
                rotateRef.current = 0;
            else
                rotateRef.current += 1;
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