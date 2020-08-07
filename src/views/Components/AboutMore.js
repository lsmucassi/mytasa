/*!

Creation of SpiritDev
=========================================================

*/
import React from "react";
// react plugin used to create datetimepicker

import SectionNavbars from "./Sections/SectionNavbars.js";
import About from './About'
import Footer from "components/Footer/Footer.js";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/conftwo.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/tasa-hero-web.png"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/gall/IMG_9207.JPG"),
    altText: "Slide 3",
    caption: ""
  }
];

class AboutMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div>
          <SectionNavbars />
          <About />
          <Footer />
      </div>
    );
  }
}

export default AboutMore;
