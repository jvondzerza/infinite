import { useState, useRef, useEffect } from 'react';
import Section from '../Section/Section';

let position = {
    x: 0,
    y: 0
}

let pages = [<Section key={0} />, <Section key={1} />, <Section key={2} />];

const Main = () => {
    const [display, setDisplay] = useState(false);
    const mainRef = useRef();
    let keyRef = useRef(3);

    useEffect(() => {
        const sectionHeight = (mainRef.current.clientHeight / mainRef.current.childNodes.length);

        window.addEventListener('wheel', function (event) {
            let yEventValue = -1;

            if (event.deltaY < 0) {
                yEventValue = 1;
            }
        
            position.y = position.y + (yEventValue * 12.5);

            if (position.y < 0) {
                mainRef.current.style.setProperty('--py', `${Math.round(position.y)}px`);

                if ((Math.abs(position.y % (sectionHeight * (pages.length - 1)))) === 0 && yEventValue === -1) {
                    setDisplay(true);
                }
            } else {
                position.y = 0;
                mainRef.current.style.setProperty('--py', `${Math.round(position.y)}px`);
            }
        })
    }, []);

    if (display) {
        pages.push(<Section key={keyRef.current} />);
        keyRef.current++;
    }

    return (
        <main ref={mainRef}>
            {pages.list.map(section => section)}
        </main>
    );
}

export default Main;