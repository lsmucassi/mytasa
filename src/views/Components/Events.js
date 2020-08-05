/*!

Creation of SpiritDev
=========================================================

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems1 = [
  {
    src: require("assets/img/EP-ONE/1.png"),
    altText: "Slide 1",
  },
  {
    src: require("assets/img/EP-ONE/2.png"),
    altText: "Slide 2",
  },
];
const carouselItems2 = [
  {
    src: require("assets/img/EP-TWO/1.png"),
    altText: "Slide 1",
  },
  {
    src: require("assets/img/EP-TWO/2.png"),
    altText: "Slide 2",
  },
];
const carouselItems3 = [
  {
    src: require("assets/img/EP-THREE/1.png"),
    altText: "Slide 1",
  },
  {
    src: require("assets/img/EP-THREE/2.png"),
    altText: "Slide 2",
  },
];
const carouselItems4 = [
  {
    src: require("assets/img/EP-FOUR/1.png"),
    altText: "Slide 1",
  },
  {
    src: require("assets/img/EP-FOUR/2.png"),
    altText: "Slide 2",
  },
];
const carouselItems5 = [
  {
    src: require("assets/img/EP-FIVE/1.png"),
    altText: "Slide 1",
  },
  {
    src: require("assets/img/EP-FIVE/2.png"),
    altText: "Slide 2",
  },
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>

        <div className="wrapper">

        <div className="section">
          <div className="title">
            <h1>Events</h1>
            <h4>We Are Virtual, catch us live on zoom, facebook, instagram & youtube</h4>
          </div>
          <Container>
            <Row className="justify-content-between">

              <Col md="5">
                <h1 className="profile-title text-left">THE BEGINNING</h1>
                <h5 className="text-on-back">03AUG</h5>
                <p className="profile-description text-left">
                  <h3>03 August 2020</h3>
                  In this episode we talk about the estabishment and the
                  purpose of TASA with the Chief Apostle of TACC CA Prof C. Nongqumga
                </p>
                <div className="btn-wrapper pt-3">

                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems1} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems2} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">THE CARRIERS OF TASA</h1>
                  <h5 className="text-on-back">10AUG</h5>
                  <p className="profile-description text-left">
                    <h3>10 August 2020</h3>
                    You probably wonder who was in the forfront of TASA in the
                    foundation stages, in this episode we have the founders of
                    TASA as guests to share how it was like being there in the
                    beginning.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>

                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">

                <Col md="5">
                  <h1 className="profile-title text-left">THE FIRST NEC</h1>
                  <h5 className="text-on-back">17AUG</h5>
                  <p className="profile-description text-left">
                  <h3>17 August 2020</h3>
                    Today a national conference is one of the events we as TASA
                    pride ourselves of, in this episode we look back to the first
                    NEC and national conference, how it came to be and the up &
                    downs.
                  </p>
                  <div className="btn-wrapper pt-3">

                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems3} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems4} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">THE NEW AGE NEC</h1>
                  <h5 className="text-on-back">24AUG</h5>
                  <p className="profile-description text-left">
                  <h3>24 August 2020 </h3>
                    In this episode we look into the modern days, what is TASA
                    today, what have we accomplished and all the projects TASA
                    is running &amp out footprint internationally.
                  </p>
                  <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">

                <Col md="5">
                  <h1 className="profile-title text-left">THE FUTURE:</h1>
                  <h5 className="text-on-back">31AUG</h5>
                  <p className="profile-description text-left">
                    <h3>31 August 2020</h3>
                    Is it bright? In this episode we look at the vision f TASA
                    and how we can further grow and fullfill it, explore Value
                     adding projects and activities.
                  </p>
                  <div className="btn-wrapper pt-3">

                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems5} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

        </div>
      </>
    );
  }
}

export default ProfilePage;
