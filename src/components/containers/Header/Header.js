import { Title, Text } from '../../blocks';

const Header = () => {
    return(
        <header>
            <Title id={"header_title"} content={"Agence créative à vos côtés"} />
            <Text id={"header_text"} text={"Une équipe simple & funky, inspirée par les projets vertueux, animée par votre réussite."} />
        </header>
    )
}

export default Header;