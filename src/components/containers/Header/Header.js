import { Image, Title } from '../../blocks';
import img from '../../assets/standing.gif';

const Header = () => {
    return(
        <header>
            Hello from the Header container component, I hold an Image block component: <br/>
            <Image src={img} /><br/>
            And a Title block component: <br/>
            <Title content={'you are now a header title'}/>
        </header>
    )
}

export default Header;