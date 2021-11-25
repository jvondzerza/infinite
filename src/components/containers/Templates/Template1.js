import { useState } from 'react';
import { Image, Title } from '../../blocks';

const Template1 = (props) => {
    const [imageInfo, setImageInfo] = useState(props.imgInfo);
    const [colorScheme, setColorScheme] = useState(props.scheme);

    return(
        <div className={"template1"}>
            <Image url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl}/>
            <Title content={"Template 1"} color={colorScheme.accent1} />
        </div>
    )

}

export default Template1;