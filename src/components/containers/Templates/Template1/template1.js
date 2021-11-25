import { Image, Title } from '../../../blocks';


const Template1 = () => {
    return (
        <section className={'main'}>
            <section className={'left'}>
                <Title class="t1-title" content="I'm such a big title, omg I can't believe this" />
            </section>

            <section className={'right'}>
                <Image class='image imgCenter imgMedium t1-img' />
            </section>
        </section>
    )
}

export default Template1;


