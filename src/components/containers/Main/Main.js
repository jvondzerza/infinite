import { useState, useRef, useEffect } from 'react';
import Section from '../Section/Section';

let pages = [];
let position = {
    x: 0,
    y: 0
}

const Main = () => {
    const [display, setDisplay] = useState(false);
    let [componentKey, setComponentKey] = useState(0);
    const mainRef = useRef();

    for (let i = 0; i < 3; i++) {
        pages.push(<Section />)
    }

    useEffect(() => {
        const sectionHeight = (mainRef.current.clientHeight / mainRef.current.childNodes.length);

        document.addEventListener('wheel', function (event) {
            let yEventValue = -1;

            if (event.deltaY < 0) yEventValue = 1;
        
            position.y = position.y + (yEventValue * 12.5);

            if (position.y <= 0) {
                mainRef.current.style.setProperty('transform', "translate(" + 0 + "px," + Math.round(position.y) + "px)");

                if (Math.abs(position.y % sectionHeight) === 0 && yEventValue === -1) {
                    console.log(Math.abs(position.y % sectionHeight), yEventValue);
                }
            } else position.y = 0;
        })

        // if (display) {
        //     console.log(position.y % sectionHeight, position.y, sectionHeight);
        //     setDisplay(false);
        // }
    }, [])

    return (
        <main ref={mainRef}>
            {pages.map(section => section)}
        </main>
    );
}

export default Main;