import hexToHSL from "../utils";
import data from "./data/images.json";

const ColorScheme = require('color-scheme');

const randImg = data[Math.floor(Math.random() * 90)];
const imageColor = randImg.color;
const imageHue = hexToHSL(imageColor);

const scheme = new ColorScheme();

scheme.from_hue(imageHue)
    .scheme('mono')
    .variation('light');

const colorsArray = scheme.colors();

export { randImg, imageColor, colorsArray };