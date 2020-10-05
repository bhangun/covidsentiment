import React from "react";
// plugin that creates slider
// import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import BasicForm from "../../../components/BasicForm.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
 // const [checked, setChecked] = React.useState([24, 22]);
  /* const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false); */
  React.useEffect(() => {
    /* if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {}; */
  });
  /* const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }; */
  return (
    <div className={classes.sections}>
      <BasicForm />
      
    </div>
  );
}
