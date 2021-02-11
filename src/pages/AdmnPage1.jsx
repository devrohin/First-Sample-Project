import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import React, { useState } from 'react';
import Error from "./ErorrPage";
import LoginPage from "./LoginPage";
import Carousel from "react-bootstrap-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../styles/Carousel.css';

export default function AdmissionPage(props) {
    console.log("AdmissionPage:", props)
    const history = useHistory();

    const [user, setUser] = useState(props.user || false)
    const [imagearray, setArray] = useState(["/assets/project/1.jpg", "/assets/project/2.jpg"])

    console.log(imagearray);
    return (
        <Page user={user}>
            <h1> Admissions </h1>
            <div className="carousel-container">
                <Carousel>
                    {(imagearray || []).map((ob, i) =>
                        <Carousel.item>
                            <img key={i} src={ob} alt="" width="500px" height="800px" />
                        </Carousel.item>
                    )}
                </Carousel>
            </div>
        </Page>
    )
}
