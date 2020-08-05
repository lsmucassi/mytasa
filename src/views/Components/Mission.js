/*!

Creation of SpiritDev
=========================================================

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import Footer from "components/Footer/Footer.js";


class Mission extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
          <section className="section section-lg">

              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Our Vision &amp; Mission</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <h4 className="info-title">History_</h4>
                        <hr className="line-primary" />
                        <p>
                          The establishment of TASA was a divine revelation.
                          TASA was officially established and registered in 1995
                           in the University of Western Cape. Driven by a
                           burning desire to fulfil the requirements of the
                           calling to serve God, these students started
                           investigating possibilities of finding a worshiping
                           venue at the campus
                           <br />
                           <br />
                           TASA was formed as a means of creating a spiritual
                           home for students which not only focuses on the
                           spiritual aspect, but all other facets that affect
                           students in their maturing.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">

                        <h4 className="info-title">Vision</h4>
                        <hr className="line-warning" />
                        <p>
                          The Vision of TASA is to be “Mass Based Christian
                          Association of Choice in Institutions of Higher Learning”
                          <br />
                          <br />
                          - Matthew 28:19: Go ye therefore, and teach all
                          nations, baptizing them in the name of the Father,
                          and of the Son, and of the Holy Ghost.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">

                        <h4 className="info-title">Mission</h4>
                        <hr className="line-success" />
                        <p>
                          Mission Statement: TASA will achieve its Vision
                          through: “Value Adding and Provision of comprehensive
                          Spiritual, Social, Economic and Academic development
                          to Student, Communities and other stakeholders”
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/design/Capture.JPG")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">We Are In <strong>5</strong> Countries</CardTitle>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">40+ Branches</CardTitle>
                          <p className="card-category text-white">
                            In South Africa
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">700+</CardTitle>
                          <p className="card-category text-white">Lovely Members</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h1>Our Code: A foundation in Christ</h1>

                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>C - Christian Enlightment & Spiritual Transformation</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>H - Human Wellness & Morality</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>R - Restoration Of Peace &amp; Unity</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>I - Intensive Promotion Of Education</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>S - Sustainable Spiritual Development</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="ml-3">
                            <hr className="line-success" />
                            <h4>T - Thriving In God's Love & Fellowship</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


      </>
    );
  }
}

export default Mission;
