import { Article } from "../../components";
import img from '../../assets/standing.gif';
import ReactDOM from "react-dom";
import React from "react";

function HomePage(props) {
    

    return (
        <section className="home">

            <Article src={img} />
        </section>
    )
}

export default HomePage;