import { Article, Title } from "../../components";
import img from '../../assets/standing.gif';

function HomePage(props) {
    return (
        <section className="home">
            <Title id="home" content="This is the Title" />
            <Article src={img} />
        </section>
    )
}

export default HomePage;