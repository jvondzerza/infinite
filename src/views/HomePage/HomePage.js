import { Form, Article } from "../../components";
import img from '../../assets/standing.gif';

function HomePage(props) {
    return (
        <section className="home">
            <Form.Select />
            <Form.TextField placeholder="Hi" />
            <Form.TextField placeholder="Hello" />
            <Form.TextField placeholder="Hallo" />

            <Article src={img} />
        </section>
    )
}

export default HomePage;