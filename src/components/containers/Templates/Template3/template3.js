import { Image, Title, Text } from '../../../blocks';


const Template3 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    return (
        <section className={'main t3'}>
            <section className={'center'}>
                <Title class="t3-title" content="Welcome 3!" />
                <Image className='image imgCenter imgMedium t3-img' url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl}/>
            </section>
            <Text id={'t3-text'} text={"scroll"} accent={colorScheme.accent1}/>
        </section>
    )
}

export default Template3;


