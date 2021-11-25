import { Image, Title } from '../../blocks';

const Template2 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    console.log(imageInfo);
    console.log(colorScheme);

    return(
        <div className={"template2"}>
            <Image url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl}/>
            <Title content={"Template 2"} color={colorScheme.accent1} />
        </div>
    )

}

export default Template2;