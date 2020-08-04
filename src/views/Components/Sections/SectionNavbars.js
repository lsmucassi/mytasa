import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
          <Header
            brand="  TASA"
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            rightLinks={
              // About Us
              <List className={classes.list}>
                <ListItem className={classes.listItem} >
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    About Us
                  </Button>
                </ListItem>
                {/* Events */}
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
                {/* Projects */}
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Projects"
                      // dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "The Educational Fund",
                        "The Constitution",
                        "Code Of Conduct",
                        { divider: true },
                        "Mentoring Project",
                        { divider: true },
                        "Women's Club"
                      ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Contact Us
                  </Button>
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
                {/* <ListItem className={classes.listItem}>
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
                  </ListItem> */}
              </List>
            }
          />
  );
}
