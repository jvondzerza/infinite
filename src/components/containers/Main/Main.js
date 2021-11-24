import { Image, Title } from '../../blocks';

const Main = () => {
    return(
        <main>
            <Image test={'calling from the main'}/>
            <Title test={'you are now a main title'}/>
        </main>
    )
}

export default Main;