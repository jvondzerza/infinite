import { useState, useRef, useEffect } from 'react';
import Section from '../Section/Section';

let pages = [<Section key={0} />, <Section key={1} />, <Section key={2} />];

const Main = () => {

    const [display, setDisplay] = useState(false);
    const mainRef = useRef();
    let keyRef = useRef(3);

    useEffect(() => {
        const sectionHeight = (mainRef.current.clientHeight / pages.length);

        window.addEventListener('scroll', () => {
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = document.documentElement;

            console.log(scrollTop)

            if (scrollTop + clientHeight >= (scrollHeight - 5) / 1.15) setDisplay(true);

        })
    }, []);

    if (display) {
        pages.push(<Section key={keyRef.current} />);
        keyRef.current++;
        setDisplay(false)
    }

    return (
        <main id={"main"} ref={mainRef}>
            {pages.map(section => section)}
        </main>
    );
}

export default Main;