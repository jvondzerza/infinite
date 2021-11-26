import { useState } from 'react';
import Section from '../Section/Section';

let pages = [<Section />, <Section />, <Section />];

const Main = () => {
    const [display, setDisplay] = useState(false);

    window.addEventListener('scroll', () => {
        const { 
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
    
        if (scrollTop + clientHeight >= (scrollHeight - 5) / 1.1) setDisplay(true);
    });

    if (display) {
        pages.push(<Section />);
        setDisplay(false);
    }

    return (
        <main>
            {pages.map(section => section)}
        </main>
    );
}

export default Main;