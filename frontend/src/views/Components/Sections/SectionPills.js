import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";

import LanguageIcon from '@material-ui/icons/Language';
import NotesIcon from '@material-ui/icons/Notes';

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import BasicForm from "../../../components/BasicForm.js";

const useStyles = makeStyles(styles);

export const SectionPills =({ success,handleInput,handleSubmit,...props})=> {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          {/* <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div> */}
          <GridContainer container justify="center">
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Text",
                    tabIcon: NotesIcon,
                    tabContent: (
                      <BasicForm handleInput={handleInput} handleSubmit={handleSubmit} success={success}/>
                    )
                  },
                  {
                    tabButton: "URL",
                    tabIcon: LanguageIcon,
                    tabContent: (
                      <BasicForm handleInput={handleInput} handleSubmit={handleSubmit} success={success}/>
                    )
                  },
                  /* {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively 
                        </p>
                       
                      </span>
                    )
                  } */
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default SectionPills