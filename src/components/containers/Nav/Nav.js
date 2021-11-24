import { Image, Link } from '../../blocks';

const Nav = () => {
    return(
        <nav>
            <Image test={'calling from the link'}/>
            <Link test={'you are now a nav link'}/>
        </nav>
    )
}

export default Nav;