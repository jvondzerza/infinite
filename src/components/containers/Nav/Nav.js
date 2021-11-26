import { Link } from '../../blocks';

const Nav = () => {
    return(
        <nav>
            <Link id={"sven"} href={"https://github.com/sven-i-am"} content={"Sven"}/>
            <Link id={"stefan"} href={"https://github.com/sven-i-am"} content={"Stefan"}/>
            <Link id={"daryl"} href={"https://github.com/sven-i-am"} content={"Daryl"}/>
            <Link id={"jorg"} href={"https://github.com/sven-i-am"} content={"Jörg"}/>
        </nav>
    )
}

export default Nav;