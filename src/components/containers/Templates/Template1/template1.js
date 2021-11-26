import { Image, Title } from '../../../blocks';


const Template1 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;
    return (
        <section className={'main t1'}>
            <section className={'left'}>
                <Title class="t1-title" content="I'm such a big title, omg I can't believe this" />
            </section>

            <section className={'right'}>
                <Image className='image imgCenter imgMedium t1-img' url={imageInfo.url} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl} />
            </section>
        </section>
    )
}

export default Template1;


