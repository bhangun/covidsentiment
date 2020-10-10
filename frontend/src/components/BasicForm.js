import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 5,
  },
  margin: {

    width: 350,
  },
}));

export const BasicForm=({ success, type, handleInput,handleSubmit,...props }) =>{
  const classes = useStyles();
  const [form, setForm] = useState({ payload: "" });

  function _handleInput(e) {
    setForm({ ...form, payload: e.target.value });
    handleInput()
  }
  function _handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("payload", form.payload);
    data.set("type", type);
    data.set("url", form.payload);
    handleSubmit(data)
  }

  function getType(){
    return type==='TEXT'? 'Masukan Text...':'http://.....'
  }
 
  function Alerting() {
    if (success === true) {
      return <Alert severity="success">Data terkirim!</Alert>;
    } else if (success === false) {
      return <Alert severity="error">Mohon maaf terjadi kesalahan! Silahkan ulangi lagi</Alert>;
    } else {
      return null;
    }
  }

  return (
    <Container>
      <form onSubmit={_handleSubmit}>
        <Grid container justify="center">
          <Grid item  sm={12} md={6} lg={6} className={classes.input}>
            <TextField className={classes.margin} justify="center"
              required
              multiline
              rowsMax={4}
              name="payload"
              id="payload"
              label={getType()}
              fullWidth={false}
              value={form.payload}
              onChange={_handleInput}
              variant="outlined"
            />
             <div style={{ marginTop: 10 }}>
                <Alerting></Alerting>
              </div>
          </Grid>

          {/* <Grid item xs={12} sm={12} md={6} lg={6} className={classes.input}>
         
          </Grid> */}

          <Grid item xs={12} sm={2} md={1} lg={6}>
            <Typography align="center">
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
             
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default BasicForm