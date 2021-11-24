import { Image, Title } from '../../blocks';

const Header = () => {
    return(
        <header>
            Hello from the Header container component, I hold an Image block component: <br/>
            <Image test={'calling from the header'}/><br/>
            And a Title block component: <br/>
            <Title test={'you are now a header title'}/>
        </header>
    )
}

export default Header;