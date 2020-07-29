import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    
          <Header
            brand="MY TASA"
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    About Us
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Events
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Projects"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "The Educational Fund",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                  
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.registerNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                </ListItem>
                {/* <ListItem className={classes.listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={classes.notificationNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                  >
                    <Email className={classes.icons} />
                  </Button>
                </ListItem> */}
                <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      hoverColor="info"
                      dropdownHeader="Dropdown Header"
                      buttonIcon="settings"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
              </List>
            }
          />
  );
}
