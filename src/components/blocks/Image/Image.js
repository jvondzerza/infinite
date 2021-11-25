import imgArray from "../../../store/images.json";
let ColorScheme = require('color-scheme');
let x = Math.floor(Math.random() * 90);

const Image = (props) => {

    let randImg = imgArray[x];
    let imageColor = randImg.color;
    let url = randImg.urls.raw;
    let description = randImg.description;

    console.log(randImg);
    console.log(randImg.color);
    console.log(randImg.urls.raw);
    console.log(randImg.description);

    if (randImg.color === imageColor){
        console.log("color ok");
    }
    if (randImg.urls.raw === url){
        console.log("url ok");
    }
    if (randImg.description === description){
        console.log("description ok");
    }


    let imageHue = hexToHSL(imageColor);
    console.log(imageHue);

    let schemeDefault = new ColorScheme();
    let schemePastel = new ColorScheme();
    let schemeSoft = new ColorScheme();
    let schemeLight = new ColorScheme();
    let schemeHard = new ColorScheme();
    let schemePale = new ColorScheme();

    schemeDefault.from_hue(imageHue)
        .scheme('mono')
        .variation('default');

    schemePastel.from_hue(imageHue)
        .scheme('mono')
        .variation('pastel');

    schemeSoft.from_hue(imageHue)
        .scheme('mono')
        .variation('soft');

    schemeLight.from_hue(imageHue)
        .scheme('mono')
        .variation('light');

    schemeHard.from_hue(imageHue)
        .scheme('mono')
        .variation('hard');

    schemePale.from_hue(imageHue)
        .scheme('mono')
        .variation('pale');

    let colorsDefault = schemeDefault.colors();
    let colorsPastel = schemePastel.colors();
    let colorsSoft = schemeSoft.colors();
    let colorsLight = schemeLight.colors();
    let colorsHard = schemeHard.colors();
    let colorsPale = schemePale.colors();


    return (
        //<img src={props.src} alt={props.alt} className={props.class} id={props.id}/>
        <div style={{display: "flex", flexDirection:"column"}}>
            <img src={url} alt={description} className={props.class} id={props.id}/>
            <figcaption>Image by {randImg.user.name}</figcaption>
            <div style={{width:"100%", height:"600px"}}>
                <div style={{width: "10%", float: "left"}}>
                    <p>Default</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsDefault[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsDefault[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsDefault[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsDefault[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
                <div style={{width: "10%", float: "left"}}>
                    <p>Pastel</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPastel[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPastel[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPastel[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPastel[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
                <div style={{width: "10%", float: "left"}}>
                    <p>Soft</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsSoft[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsSoft[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsSoft[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsSoft[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
                <div style={{width: "10%", float: "left"}}>
                    <p>Light</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsLight[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsLight[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsLight[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsLight[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
                <div style={{width: "10%", float: "left"}}>
                    <p>Hard</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsHard[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsHard[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsHard[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsHard[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
                <div style={{width: "10%", float: "left"}}>
                    <p>Pale</p>
                    <div className={'colorTest'} style={{backgroundColor: randImg.color, margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>imgColor</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPale[0], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 1</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPale[1], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 2</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPale[2], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 3</div>
                    <div className={'colorTest'} style={{backgroundColor: "#" + colorsPale[3], margin: "2px 5%", objectFit: "cover", objectPosition: "center", height: "100px", width: "100px"}}>Comp 4</div>
                </div>
            </div>
        </div>
    )
}

export default Image;

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