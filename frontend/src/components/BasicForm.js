import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 5,
  },
  margin: {

    width: 350,
  },
}));

export default function BasicForm() {
  const url = "http://localhost:5000/api/submit";
  const classes = useStyles();
  const [form, setForm] = useState({ payload: "" });
  const [result, setResult] = useState({
    "polarity":0.0,
    "tags": [],
    "noun_phrases": [],
    "word_counts": {},
    "words":[],
    "sentiment_assessments":[],
    "tokenize":[],
    "language":""
  });

  const [success, setSuccess] = useState(null);

  function handleInput(e) {
    setForm({ ...form, payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("payload", form.payload);

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then(function (response) {
        const res = response.data
       
        setResult({
            "polarity":res.polarity,
            "tags": res.tags,
            "noun_phrases": res.noun_phrases,
            "word_counts": res.word_counts,
            "words":res.words,
            "sentiment_assessments":res.sentiment_assessments,
            "tokenize":res.tokenize,
            "language": res.language
        })
        console.log('>>>>>>>>>>>>>',result);
        setSuccess(true);
      })
      .catch(function (response) {
        setResult(response)
        setSuccess(false);
        console.log(response);
      });
  }

  function Alerting() {
    if (success === true) {
      return <Alert severity="success">Data terkirim!</Alert>;
    } else if (success === false) {
      return <Alert severity="error">Mohon maaf terjadi kesalahan!</Alert>;
    } else {
      return null;
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center">
          <Grid item  sm={12} md={6} lg={6} className={classes.input}>
            <TextField className={classes.margin} justify="center"
              required
              multiline
              rowsMax={4}
              name="payload"
              id="payload"
              label="Masukan teks... "
              fullWidth={false}
              value={form.payload}
              onChange={handleInput}
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
