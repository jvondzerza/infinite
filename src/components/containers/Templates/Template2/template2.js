import { Image, Title } from '../../../blocks';

//onMouseOver={mouseOver} onMouseLeave={mouseLeave}
const Template2 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    return (
        <div id={'t2-main'}>
            <div id={'t2-imgContainer'}>
                <Image id={'t2-img'} url={imageInfo.urlRegular} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl} />
            </div>
            <div className={"t2-title"}>
                <Title content={"A DEV"} color={colorScheme.txtColor} />
                <Title content={"CAN BE"} color={colorScheme.txtColor} />
                <Title content={"A DESIGNER"} color={colorScheme.txtColor} />
            </div>
        </div>
    )
}

export default Template2;