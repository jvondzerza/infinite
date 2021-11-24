import { Image, Link, Text, Title } from "../../blocks";
import imgArray from "../../../store/images.json";

const imgInfo = "content of the image.json file";
let imgUrl = "imgInfo.url";
let color = "imgInfo.color";
let text = "text from api";
let background = "complementary color of image"


function Section() {
    console.log(imgArray);

    return (
        <section>
            Hello from the section container component, I can hold a lot of child components such as: <br/>
            An image <br/>
            <Image test={"this is the section calling"} /><br/>
            A Link <br/>
            <Link test={"section link now"}/><br/>
        </section>
    )
}

export default Section;