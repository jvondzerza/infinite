import { Article } from "../../components";
import img from '../../assets/standing.gif';

function HomePage() {
    return (
        <section className="home">
            <Article src={img} />
        </section>
    )
}

export default HomePage;