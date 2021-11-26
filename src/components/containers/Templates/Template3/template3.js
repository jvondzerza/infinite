import { Image, Title, Text } from '../../../blocks';

const Template3 = (props) => {

    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    return (
        <section id={'t3-main'} >
            <section id={'t3-title1'}>
                <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.txtColor} />
            </section>
            <section id={'t3-imgContainer'}  onMouseOver={mouseOver} onMouseLeave={mouseLeave}>

                <section id={'t3-title2'}>
                    <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.accent3} />
                </section>
                <Image id='t3-img' url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl} />
            </section>
            <Text id={'t3-text'} text={"scroll"} accent={colorScheme.accent1}/>
        </section>
    )
}

export default Template3;


/*start movement functions*/

function mouseOver(){
    let Xdiff = 0;
    let Ydiff = 0;
    let viewBox = document.getElementById('t3-imgContainer');
    let img= document.getElementById('t3-img');
    let t2 = document.getElementById('t3-title2');
    let imgX = img.offsetLeft;
    let imgY = img.offsetTop;
    let boxX = viewBox.offsetLeft;
    let boxY = viewBox.offsetTop;
    let t2X = t2.offsetLeft;
    let t2Y = t2.offsetTop;

    let oldX = 0;
    let oldY= 0;
    let directionX = "";
    let directionY = "";
    viewBox.onmousemove = function(event){
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        if (mouseX < oldX) {
            directionX = "left"
        } else if (mouseX > oldX) {
            directionX = "right"
        } else {
            directionX = null;
        }
        if (mouseY < oldY){
            directionY = "up";
        } else if (mouseY > oldY){
            directionY = "down";
        } else {
            directionY = null;
        }
        oldX = mouseX;
        oldY = mouseY;

        switch(directionX) {
            case "left":
                Xdiff --;
                if(Xdiff > -40){
                    boxX -= 0.5;
                    imgX += 0.5;
                    t2X -= 0.3;
                }
                break;
            case "right":
                Xdiff ++;
                if(Xdiff < 40){
                    boxX += 0.5;
                    imgX -= 0.5;
                    t2X += 0.3;
                }
                break;
            case null:
                break;
        }
        switch (directionY){
            case "up":
                Ydiff --;
                if(Ydiff > -40) {
                    boxY -= 0.5;
                    imgY += 0.5;
                    t2Y -= 0.2;
                }
                break;
            case "down":
                Ydiff ++;
                if(Ydiff < 40) {
                    boxY += 0.5;
                    imgY -= 0.5;
                    t2Y += 0.5;
                }
                break;
            case null:
                break;
        }
        viewBox.style.top = boxY + "px";
        viewBox.style.left = boxX + "px";
        img.style.top = imgY + "px";
        img.style.left = imgX + "px";
        t2.style.top = t2Y + "px";
        t2.style.left = t2X + "px";
    }
}

function mouseLeave(){
    document.getElementById('t3-imgContainer').style.top = "50%";
    document.getElementById('t3-imgContainer').style.left = "50%";
    document.getElementById('t3-img').style.top = "0";
    document.getElementById('t3-img').style.left = "0";
    document.getElementById('t3-title2').style.top = "0";
    document.getElementById('t3-title2').style.left = "50%";
}

/*end movement function*/