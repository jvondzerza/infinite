import { useEffect, useState } from "react";

import Template1 from "../Templates/Template1/template1";
import Template3 from "../Templates/Template3/template3";
import { randImg, imageColor, colorsArray } from "../../../store";

function Section() {
    const [imageInfo, setImageInfo] = useState({
        url: randImg.urls.small,
        description: randImg.description,
        credit: randImg.user.name,
        creditUrl: randImg.links.html
    });
    
    const [colorScheme, setColorScheme] = useState({
        bgColor: imageColor,
        txtColor: "#" + colorsArray[2],
        accent1: "#" + colorsArray[0],
        accent2: "#" + colorsArray[1],
        accent3: "#" + colorsArray[3]
    });

    let templateUsed = <Template1 imgInfo={imageInfo} scheme={colorScheme}/>;

    useEffect(() => {
        document.documentElement.style.setProperty('background-color', colorScheme.bgColor)
        document.documentElement.style.setProperty('color', colorScheme.txtColor)
    }, [imageInfo, colorScheme])

    switch (Math.floor(Math.random() * 3) + 1){
        case 1:
            templateUsed = <Template1 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;
        default:
            templateUsed = <Template3 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;
    }
    return (
        <section>
            {templateUsed}
        </section>
    )
}

export default Section;