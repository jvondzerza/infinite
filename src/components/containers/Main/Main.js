import { useState, useRef, useEffect } from 'react';
import Section from '../Section/Section';

let position = {
    x: 0,
    y: 0
}

const Main = () => {
    const [pages, setPages] = useState({
        list: [<Section key={0} />, <Section key={1} />, <Section key={2} />]
    });

    const [lengthChilds, setLengthChilds] = useState({
        length: pages.list.length
    });

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

                if ((Math.abs(position.y % (sectionHeight * (lengthChilds.length - 1)))) === 0 && yEventValue === -1) {
                    const newPage = pages.list.concat(<Section key={keyRef.current} />);
                    setPages({
                        list: newPage
                    })
                    setLengthChilds({
                        length: newPage.length
                    });
                    console.log(pages.list);
                    keyRef.current++;
                }
            } else {
                position.y = 0;
                mainRef.current.style.setProperty('--py', `${Math.round(position.y)}px`);
            }
        })
    }, [pages, lengthChilds]);

    return (
        <main ref={mainRef}>
            {pages.list.map(section => section)}
        </main>
    );
}

export default Main;