import { Title, Text, Svg } from '../../blocks';

const Header = () => {
    return(
        <header>
            <Title id={"header_title"} content={"Welcome to the Infinite Scroll"} />
            <Text id={"header_text"} text={"Scroll down and explore our templates"} />
        </header>
    )
}

export default Header;

