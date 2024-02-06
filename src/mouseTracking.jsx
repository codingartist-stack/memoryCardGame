import { useEffect, useState } from "react"

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null})

    useEffect(()=> {
        const updateMousePosition = ev => {
            // setMousePosition({x: ev.clientX, y: ev.clientY})
            const xPosition = ev.clientX;
            const yPostion = ev.clientY

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;

            const offsetX = (((xPosition - middleX) / middleX) * 45);
            const offsetY = (((yPostion - middleY) / middleY) * 45);

            setMousePosition({x: offsetX, y: offsetY})

        };

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;