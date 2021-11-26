import hexToHSL from "../utils";
import data from "./data/images.json";

const ColorScheme = require('color-scheme');

function imgData(rand) {
    const randImg = data[Math.floor(rand * 90)];
    const imageColor = randImg.color;
    const imageHue = hexToHSL(imageColor);

    const scheme = new ColorScheme();

    scheme.from_hue(imageHue)
        .scheme('mono')
        .variation('light');

    const colorsArray = scheme.colors();

    return {
        img: randImg, 
        clr: imageColor, 
        clrArr: colorsArray
    }
}

export { imgData };