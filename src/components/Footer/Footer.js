/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.mytasa.org/?ref=mkr-footer"
                className={classes.block}
              >
                Home
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/tasa_int/"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , Developed By SpiritDev_ {" "}

          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            - Twelve Apostles' Students Association -
          </a>{" "}
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
