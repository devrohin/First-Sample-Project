import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";
import LoginPage from "./LoginPage";
import Carousel from "react-bootstrap/Carousel";
import '../styles/Carousel.css';

export default function AdmissionPage({ user }) {

  // const history = useHistory();
  const CarouselList = [
    {
      img: "/logo192.png"
    },
    {
      img: "assets/project/2.jpg"
    },
    {
      img: "assets/project/3.jpg"
    },
    {
      img: "assets/project/4.jpg"
    },
    {
      img: "assets/project/5.jpeg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    }
  ];
  return (
    <Page user={user}>
      <h1> Admissions </h1>
      <div className="carousel-container">
        <Carousel>
          {CarouselList.map(i =>
            <Carousel.Item>
              <img src={i.img} alt="" width="600px" height="500px" />

            </Carousel.Item>
          )}
        </Carousel>
      </div>
    </Page>
  );
}
