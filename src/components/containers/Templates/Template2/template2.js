import { Image, Title } from '../../../blocks';
import { gsap } from "gsap";
import { useRef } from "react";
import useHover from "../../../../utils/helpers/useHover";


const Template2 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;
    const img = useRef();
    const [text, isTextHovered] = useHover()
    let imgTimeline = gsap.timeline({paused: false})
    let textTimeline = gsap.timeline({paused: false})
    gsap.set(img.current, {xPercent: -50, yPercent: -50});
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.75;

    function mouseOver() {
        imgTimeline.fromTo(img.current,{opacity: 0, scale: 1},{opacity: 1, scale: 1.2, duration: 1});
        textTimeline.fromTo(text.current, {scale: 1}, {scale: 1.1, duration: 1});
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        })
    }

    function mouseLeave() {
        imgTimeline.fromTo(img.current,{opacity: 1, scale: 1.2},{delay: 0.25, opacity: 0, scale: 1, duration: 1})
        textTimeline.fromTo(text.current, {scale: 1.1}, {scale: 1, duration: 1});
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        })
    }

    const xSet = gsap.quickSetter(img.current, "x", "px");
    const ySet = gsap.quickSetter(img.current, "y", "px");

    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    return (
        <div id={'t2-main'}>
            <div ref={img} id={'t2-imgContainer'}>
                <Image id={'t2-img'} url={imageInfo.urlRegular} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl} />
            </div>
            <div ref={text} className={"t2-title"} onMouseEnter={`${isTextHovered ? mouseOver() : mouseLeave()}`}>
                <Title content={'A DEV {\n} CAN BE \n A DESIGNER'} color={colorScheme.txtColor} />
            </div>
        </div>
    )
}

export default Template2;