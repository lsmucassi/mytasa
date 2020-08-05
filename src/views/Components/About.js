/*!

Creation of SpiritDev
=========================================================

*/
import React from "react";
// react plugin used to create datetimepicker

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

class About extends React.Component {
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
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />

        <div className="section">
          <Container>
            <div >
              <h2>About Us</h2>
            </div>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  We Are TASA!
                </h1>
                <p className="text-white mt-4">
                We are a faith-based student organization for all registered
                students in institutions of higher learning. Although majority
                of members are from the various provinces in South Africa, its
                membership extends across the borders, including Lesotho,
                Zimbabwe just to mention a few.<br /> <br /> The association was founded upon
                 the ideals of Christianity, which align with those of, and the
                 dogma and programmes of its mother body,Twelve Apostle’s Church
                  in Christ (TACC). <br /> <br />
                TASA is committed to the establishment of a unified, harmonized,
                 non-discriminant and prosperous nation that shall breed an
                 everlasting divine kingdom for human wellness through Christ.
                 This embodies the vision of the organisation which is
                 “Evolution through Christ
                </p>
                <Button
                  className="mt-4"
                  color="success"
                  href=""
                >
                  Join TASA
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItems}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
