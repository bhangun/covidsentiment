import React from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionPills from "./Sections/SectionPills.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import ChartPosNeg from "./Sections/SectionChart.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Sentiment Analysis"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/virus.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Sentiment Analysis</h1>
                <h3 className={classes.subtitle}>
                Pengembangan Aplikasi Sistem Cerdas Untuk Pendekteksi dan Penangkal Hoaks Seputar Covid-19 Dengan Intelligent Sentiment Analysis dan Intelligent Public Opinion Mining
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills />
        {/* <SectionBasics /> */}
       
        <ChartPosNeg />
      </div>
      <Footer />
    </div>
  );
}
