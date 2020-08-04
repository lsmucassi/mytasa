import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import JavaScrip from './JavaScript'
import Mission from './Mission'
import WorkSection from './WorkSection'
import Gallery from './Gallery'

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <SectionNavbars id="home" />

      {/* <SectionCarousel /> */}

      <Parallax image={require("assets/img/tasa-hero-web.png")}>
        <div className={classes.container}>
          <GridContainer>
            {/* <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>We Are Turning 25.</h1>
                <h3 className={classes.subtitle}>
                  Come Celebrate With Us | A Home Away From Home
                  We keep winning, we keep growing, we keep moving
                </h3>
              </div>
            </GridItem> */}
          </GridContainer>
        </div>
      </Parallax>
      <div style={{background:"#333"}} className={classNames(classes.main)}>
      <JavaScrip />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{background:"#3498DB"}} className={classNames(classes.main)}>
          <Mission />
        </div>
        <SectionBasics />

        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <Gallery />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
