import { Article } from "../../components";
import img from '../../assets/standing.gif';
import Button from "../../components/buttons/RickRoll/Button"
import ReactDOM from "react-dom";
import React from "react";

function HomePage(props) {
    

    return (
        <section className="home">

            <Button />
            <Article src={img} />
        </section>
    )
}

export default HomePage;