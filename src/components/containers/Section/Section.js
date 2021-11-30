import { useEffect, useRef } from "react";
import { Img } from "../../../store";

import Nav from '../Nav/Nav';
import Template1 from "../Templates/Template1/template1";
import Template2 from "../Templates/Template2/template2";
import Template3 from "../Templates/Template3/template3";

function Section() {
    const imgData = new Img();
    imgData._setValues(Math.random());
    
    const imageData = imgData._getValues();
    const randImg = imageData.img;
    const imageColor = imageData.clr;
    const colorsArray = imageData.clrArr;

    const sectionRef = useRef();

    const imageInfo = {
        url: randImg.urls.small,
        urlRegular: randImg.urls.regular,
        description: randImg.description,
        credit: randImg.user.name,
        creditUrl: randImg.links.html
    };

    const colorScheme = {
        bgColor: imageColor,
        txtColor: "#" + colorsArray[2],
        accent1: "#" + colorsArray[0],
        accent2: "#" + colorsArray[1],
        accent3: "#" + colorsArray[3]
    };

    let templateUsed = <Template3 imgInfo={imageInfo} scheme={colorScheme}/>;

    switch (Math.floor(Math.random() * 3) + 1){
        case 1:
            templateUsed = <Template1 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;

        case 2:
            templateUsed = <Template2 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;

        default:
            templateUsed = <Template3 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;
    }

    useEffect(() => {
        sectionRef.current.style.setProperty('--bg', colorScheme.bgColor);
        sectionRef.current.style.setProperty('--txt', colorScheme.txtColor);
        sectionRef.current.style.setProperty('--clr-white', colorScheme.accent3);
    }, [colorScheme.bgColor, colorScheme.txtColor, colorScheme.accent3])

    return (
        <>
            <section ref={sectionRef} className={'section'}>
                <Nav />
                {templateUsed}
            </section>
        </>
    )
}

export default Section;