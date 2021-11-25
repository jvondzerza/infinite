import { Image, Title } from '../../blocks';

const Template1 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    console.log(imageInfo);
    console.log(colorScheme);

    return(
        <div className={"template1"}>
            <Image url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl}/>
            <Title content={"Template 1"} color={colorScheme.accent1} />
        </div>
    )

}

export default Template1;