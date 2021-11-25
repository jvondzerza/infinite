import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import imgArray from "../../../store/images.json";

let ColorScheme = require('color-scheme');
let x = Math.floor(Math.random() * 90);
let randImg = imgArray[x];
let imageColor = randImg.color;
let imageHue = hexToHSL(imageColor);
let scheme = new ColorScheme();
scheme.from_hue(imageHue)
    .scheme('mono')
    .variation('light');

let colorsArray = scheme.colors();

let imageInfo = {
    url: randImg.urls.small,
    description: randImg.description,
    credit: randImg.user.name,
    creditUrl: randImg.links.html
}

let colorScheme = {
    bgColor: imageColor,
    txtColor: "#" + colorsArray[2],
    accent1: "#" + colorsArray[0],
    accent2: "#" + colorsArray[1],
    accent3: "#" + colorsArray[3]
}

function Section() {
    let rndX = Math.floor(Math.random() * 2) + 1;
    let templateUsed;

    switch (rndX){
        case 1:
            templateUsed = <Template1 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;
        case 2:
            templateUsed = <Template2 imgInfo={imageInfo} scheme={colorScheme}/>;
            break;
    }
    return (
        <section style={{backgroundColor: colorScheme.bgColor, color:colorScheme.txtColor}}>
            {templateUsed}
        </section>
    )
}

export default Section;


function hexToHSL(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, l = (max + min) / 2;
    if(max === min){
        h = 0; // achromatic
    }else{
        let d = max - min;
        h = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
        }
        h /= 6;
    }
    return Math.round(240*h);
}