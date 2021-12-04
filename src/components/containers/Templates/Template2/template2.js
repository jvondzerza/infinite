import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Image, Title } from '../../../blocks';

const Template2 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    const img = useRef();
    const text = useRef();

    let tl = gsap.timeline()

    const onMouseEnter = () => {
        tl.fromTo(
            img.current,
            { opacity: 0 },
            { delay: 0.15, opacity: 1 }
        );
    }

    const onMouseLeave = () => {
        tl.fromTo(
            img.current,
            { opacity: 1 },
            { opacity: 0 }
        );
    }

    useEffect(() => {
        tl.set(img.current, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', (e) => {
            gsap.to(img.current, {
                duration: 0.5,
                ease: "power1.out",
                x: e.clientX,
                y: e.clientY
            })
        })
    }, [tl])

    return (
        <div id={'t2-main'}>
            <div ref={img} id={'t2-imgContainer'}>
                <Image 
                    id={'t2-img'} 
                    url={imageInfo.urlRegular} 
                    description={imageInfo.description} 
                    credit={imageInfo.credit} 
                    creditUrl={imageInfo.creditUrl} 
                />
            </div>
            <div 
                ref={text}
                className={"t2-title"}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {['A DEV', 'CAN BE', 'A DESIGNER'].map((piece, idx) => {
                    return (
                        <Title
                            key={idx}
                            content={piece}
                            color={colorScheme.txtColor}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Template2;