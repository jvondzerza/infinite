import { Image, Title } from '../../blocks';

const Header = () => {
    return(
        <header>
            Hello from the Header container component, I hold an Image block component: <br/>
            <Image class={"image imgCenter imgMedium"} /><br/>
            And a Title block component: <br/>
            <Title content={'you are now a header title'}/>
        </header>
    )
}

export default Header;